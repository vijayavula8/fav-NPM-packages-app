import React,{useState} from 'react'
import SearchBar from '../components/SearchBar';
import WhyTextBox from '../components/WhyTextBox';
import ErrorPopUp from '../components/ErrorPopUp';
import {useNavigate} from 'react-router-dom';


function AddFavorite() {
  const [errorPop, setErrorPop] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClosePopUp = () => {
    setErrorPop(false);
  }
  const handleClick = ()=>{
    const selectedOption: any = window.localStorage.getItem('currentSelectedPackage');
    const reason: any = window.localStorage.getItem('currentReason');
    if(selectedOption && reason){
      const favPackage: any = {
        name: selectedOption,
        reason: reason
      };
      let favItems: any = [];
      if(window.localStorage.getItem('favorite-packages')!==null){
        const items: any = window.localStorage.getItem('favorite-packages');
        favItems = JSON.parse(items);
      }
      favItems.push(favPackage);
      window.localStorage.setItem('favorite-packages',JSON.stringify(favItems));
      window.localStorage.removeItem('currentSelectedPackage');
      window.localStorage.removeItem('currentReason');
      navigate('/');
    }
    else{
      setErrorPop(true);
    }
    
    
  }
  return (
    <>
     {errorPop && <ErrorPopUp handleClose={handleClosePopUp}/>}
    <SearchBar />
    <WhyTextBox />
    <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default AddFavorite;