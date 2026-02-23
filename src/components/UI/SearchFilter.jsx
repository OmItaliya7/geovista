const SearchFilter = ({search,setSearch,region,setRegion,setSortOrder}) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12 text-white">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-72 bg-transparent border border-white/20 rounded-full px-5 py-2 text-sm text-white focus:outline-none focus:border-white/40"/>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-4 items-center">

        <button
          onClick={() => setSortOrder("asc")}
          className=" px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
          Asc
        </button>

        <button
          onClick={() => setSortOrder("desc")}
          className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
          Desc
        </button>

        {/* REGION DROPDOWN */}
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-black border border-white/20 rounded-full px-4 py-3 text-sm focus:outline-none">
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

      </div>
    </div>
  );
};

export default SearchFilter;