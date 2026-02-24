// import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getIndvCountryData } from "../../services/postApi";

const CountryIndv = () => {

  const { name } = useParams();
//   const [country, setCountry] = useState(null);

//   const fetchIndvCountry = async () => {
//     try {
//       const response = await getIndvCountryData(name);

//       if (response.status === 200 && response.data.length > 0) {
//         setCountry(response.data[0]);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchIndvCountry();
//   }, [name]);


  const {data, isLoading, isError} = useQuery({
    queryKey: ["country", name],
    queryFn: () => getIndvCountryData(name),
    staleTime: 1000*60*30,
  })

  const country = data?.data?.[0];

  if (isLoading) {
  return (
    <section className="text-white text-center py-20">
      Loading...
    </section>
  );
}

if (isError) {
  return (
    <section className="text-red-500 text-center py-20">
      Error loading country
    </section>
  );
}

  return (
    <section className="text-white py-14">
      <div className="max-w-5xl mx-auto px-4">

        <Link to="/country" className="inline-block mb-10 px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition ">
          ← Back
        </Link>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className=" w-full h-64 sm:h-80 overflow-hidden rounded-2xl border border-white/10 ">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-4 text-sm sm:text-base">

            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {country.name.official}
            </h1>

            <p>
              <span className="text-gray-400">Native Names:</span>{" "}
              {country.name.nativeName
                ? Object.values(country.name.nativeName)
                    .map(n => n.official)
                    .join(", ")
                : "N/A"}
            </p>

            <p>
              <span className="text-gray-400">Population:</span>{" "}
              {country.population?.toLocaleString()}
            </p>

            <p>
              <span className="text-gray-400">Region:</span>{" "}
              {country.region}
            </p>

            <p>
              <span className="text-gray-400">Sub Region:</span>{" "}
              {country.subregion || "N/A"}
            </p>

            <p>
              <span className="text-gray-400">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>

            <p>
              <span className="text-gray-400">Top Level Domain:</span>{" "}
              {country.tld?.join(", ") || "N/A"}
            </p>

            <p>
              <span className="text-gray-400">Currencies:</span>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map(c => c.name)
                    .join(", ")
                : "N/A"}
            </p>

            <p>
              <span className="text-gray-400">Languages:</span>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryIndv;