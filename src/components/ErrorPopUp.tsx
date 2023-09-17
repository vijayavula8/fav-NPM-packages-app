import React from 'react'

interface ChildProps{
    handleClose: () => void;
}

const ErrorPopUp: React.FC<ChildProps> = (props) => {
  return (
    <div style={{position:"absolute", height:"100vh",width:"100%", backgroundColor:"rgba(0,0,0,0.3)",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{backgroundColor: "white",padding:"20px 10px", borderRadius:"5px"}}>Please Select the Package or Reason to add to fav list.
        <button onClick={props.handleClose}>Close</button></div>
    </div>
  )
}

export default ErrorPopUp