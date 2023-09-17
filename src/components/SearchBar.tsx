import React,{useState} from 'react'
import axios from 'axios';
import Results from './Results';



const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [packages, setPackages] = useState<string[]>([]);
    const fetchPackages = async ()=>{
        const packages: any = await axios.get('https://api.npms.io/v2/search?q='+searchText);        
        const packageNames: string[] = [];
        for (let index = 0; index < packages.data.results.length; index++) {
            const element = packages.data.results[index];
            packageNames.push(element.package.name);
        }
        setPackages(packageNames);
    }

  return (
    <div>
        <label>Search for NPM packages</label>
        <input onChange={(e)=> setSearchText(e.target.value)} type='text'/>
        <button onClick={fetchPackages}>Search Packages</button>
        <br/>
        <Results packages={packages}/>
    </div>
  )
}

export default SearchBar