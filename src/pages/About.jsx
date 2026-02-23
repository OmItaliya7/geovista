import countryData from "../API/countryData";

const About = () =>{
    return(
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
                Here are the Interesting Facts
                 <br />
                we're proud of 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryData.map((country) =>{
                    const {id, countryName, population,capital, interestingFact} = country;
                    return(
                        <div key={id} className="container-card h-full flex flex-col">
                            <div className="space-y-4">
                                <p className="text-xl font-semibold mb-2">{countryName}</p>
                                <p>
                                    <span className="text-gray-400 font-medium">Capital: </span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="text-gray-400 font-medium">Population: </span>
                                    {population}
                                </p>
                                <p>
                                    <span className="text-gray-400 leading-relaxed font-medium">Interesting Fact: </span>
                                    {interestingFact}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default About;