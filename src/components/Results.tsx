import React,{useState} from 'react'

interface ChildProps{
    packages: string[]
}

const Results: React.FC<ChildProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        window.localStorage.setItem('currentSelectedPackage',e.target.value);
    }

  return (
    <>
    <label>Results</label><br/>
            {props.packages.map((item,idx)=>{
                return <div key={idx}>
                    <input type="radio" name='packages' id={item} value={item} onChange={handleChangeOption} checked={selectedOption===item} />
                    <label htmlFor={item}>{item}</label>
                </div>
            })}
    </>
  )
}

export default Results