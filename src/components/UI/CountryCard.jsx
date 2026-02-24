
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {

  const { name, capital, population, region, flags } = country;

  return (
    <li
      className="bg-gradient-to-br from-[#1f1f1f] via-[#1a1a1a] to-[#0f0f0f] text-white rounded-3xl border border-white/10  hover:border-white/30 transition-all duration-300 p-5 flex flex-col h-full " >
    
      <div
        className=" w-full h-48 sm:h-52 lg:h-40 overflow-hidden rounded-xl">
        <img
          src={flags.png}
          alt={`${name.common} flag`}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="mt-5 space-y-2 text-sm sm:text-base lg:text-sm flex-1">
        <p className="font-semibold text-lg md:truncate">{name.common}</p>

        <p>
          <span className="text-gray-400">Population:</span>{" "}
          {population.toLocaleString()}
        </p>

        <p>
          <span className="text-gray-400">Region:</span> {region}
        </p>

        <p>
          <span className="text-gray-400">Capital:</span>{" "}
          {capital?.[0] || "N/A"}
        </p>
        
        <div className="mt-auto pt-4 flex justify-right">
            <NavLink to={`/country/${name.common}`}>
              <button className=" flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black  transition-all duration-300 " >
                Read More
                <FaLongArrowAltRight className="text-xs mt-[1px]" />
              </button>
            </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;