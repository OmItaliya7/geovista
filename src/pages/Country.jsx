
import { useState, useEffect } from "react";
import { getCountryData } from "../services/postApi";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const Country = () => {


  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

    const { ref, inView } = useInView({
      threshold: 1,
    });



    useEffect(() => {
      setVisibleCount(12);
    }, [search, region, sortOrder]);
  

    const {data, isLoading, isError} = useQuery({
        queryKey: ["countries"],
        queryFn: getCountryData,
        staleTime: 1000*60*10,
    })

    const country = data?.data || [];

    const filteredCountries = country
    .filter((c)=>{
        if(!search) return true;
        return c.name.common.toLowerCase().includes(search.toLowerCase());
    })
    .filter((c) =>{
        if(region === "all") return true;
        return c.region === region;
    })
    .sort((a,b) =>{
        if(!sortOrder) return 0;

        return sortOrder === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);   
    })


    useEffect(() => {
      if (inView && visibleCount < filteredCountries.length) {
        setIsLoadingMore(true);

        const timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 12);
          setIsLoadingMore(false);
        }, 400);

        return () => clearTimeout(timer);
      }
    }, [inView, filteredCountries.length]);



    if(isLoading){
        return <p className="text-white text-center py-20">Loading countries...</p>
    }
    if(isError){
        return <p className="text-white text-center py-20">Error fetching countries.</p>
    }

//   const fetchCountries = async () => {
//     try {
//       const response = await getCountryData();
//       setCountry(response.data);
//     } catch (error) {
//       console.error("Error fetching country data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCountries();
//   }, []);



  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCountries.slice(0, visibleCount).map((currCountry, index) => (
          <CountryCard country={currCountry} key={index} />
        ))}
      </ul>

      <div ref={ref} className="text-center py-10 text-gray-400">
        {isLoadingMore
          ? "Loading more countries..."
          : visibleCount < filteredCountries.length
            ? "Scroll to load more"
            : "You reached the end 🌍"}
      </div>
    </section>
  );
};

export default Country;