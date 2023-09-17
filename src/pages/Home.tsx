import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';

interface PackageType{
    name: string;
    reason: string;
};

function Home() {
    const [favPackages, setFavPackages] = useState<PackageType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
      const items: any = window.localStorage.getItem('favorite-packages');
      setFavPackages(JSON.parse(items));
    }, [localStorage.getItem('favourite-packages')])
    

  return (
    <div>
        <button onClick={()=>navigate('/add-fav') }>Add Fav</button>
        {
            favPackages?.length && favPackages.map((item: PackageType) => {
return <>
<div>{item.name}</div>
</>
            })
        }
    </div>
  )
}

export default Home;