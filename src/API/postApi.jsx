import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});


// Function to fetch all countries
export const getCountryData = () =>{
    return api.get("/all?fields=name,flags,population,region,capital");
}

//fetch individual country data
export const getIndvCountryData = (name) =>{
    return api.get( `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}