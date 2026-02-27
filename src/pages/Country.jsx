import { useState, useEffect, useMemo, useCallback } from "react";
import { getCountryData } from "../services/postApi";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { FaArrowUp } from "react-icons/fa";
  

const Country = () => {

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { ref, inView } = useInView({
      threshold: 1,
  });


 useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 400 && currentScrollY > lastScrollY) {
      // scrolling DOWN
      setShowTopBtn(true);
    } else {
      // scrolling UP
      setShowTopBtn(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);



    useEffect(() => {
      setVisibleCount(12);
    }, [search, region, sortOrder]);

    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  

    const {data, isLoading, isError} = useQuery({
        queryKey: ["countries"],
        queryFn: getCountryData,
        staleTime: 1000*60*10,
    })

    const country = data?.data || [];

    
    const filteredCountries = useMemo(() => {
      return country
        .filter((c) => {
          if (!search) return true;
          return c.name.common.toLowerCase().includes(search.toLowerCase());
        })
        .filter((c) => {
          if (region === "all") return true;
          return c.region === region;
        })
        .sort((a, b) => {
          if (!sortOrder) return 0;
          return sortOrder === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
    }, [country, search, region, sortOrder]);


 
    useEffect(() => {
      if (inView && visibleCount < filteredCountries.length) {
        setIsLoadingMore(true);

        const timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 12);
          setIsLoadingMore(false);
        }, 400);

        return () => clearTimeout(timer);
      }
    }, [inView, filteredCountries.length, visibleCount]);



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
            : "You reached the end"}
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="
            fixed 
            bottom-6 right-4 sm:bottom-8 sm:right-8
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/20
            text-white
            shadow-xl
            hover:bg-white hover:text-black
            transition-all duration-300
            z-50
          "
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default Country;