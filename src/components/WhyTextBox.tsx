import React,{useState} from 'react'

function WhyTextBox() {
    const [reason, setReason] = useState<string>('');
    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        window.localStorage.setItem("currentReason",e.target.value);
        setReason(e.target.value);
    }
  return (
    <>
    <div>Why is this your fav?</div>
    <textarea style={{width:"400px",height:"200px"}} onChange={handleReasonChange}>

    </textarea>
    </>
  )
}

export default WhyTextBox;