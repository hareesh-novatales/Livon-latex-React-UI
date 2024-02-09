import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef } from "react";
import { useState } from "react";

const OtpInput = ({length=6,onOtpSubmit=()=>{}}) => {
    const [otp, setOtp]=useState(new Array(length).fill(""));
    const inpuRefs = useRef ([]);
    useEffect(()=>{
        if(inpuRefs.current[0]){
            inpuRefs.current[0].focus();
        }
    },[])
 

    const handleChange=(index,e)=>{
        const value = e.target.value;
        if(isNaN(value))return
        const newOtp = [...otp]
        //allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        //submit trigger

        const combinedOtp = newOtp.join("");
        if(combinedOtp.length===length)
        onOtpSubmit(combinedOtp);

        //move to next input if current field is filled
        if(value && index<length-1 && inpuRefs.current[index+1]){
            inpuRefs.current[index+1].focus();
        }
    }
    const handleClick=(index)=>{
        inpuRefs.current[index].setSelectionRange(0 , 1)
    }
    const handleKeyDown=(index,e)=>{
        if(e.key==="Backspace" && 
        !otp[index] && index>0 &&  
        inpuRefs.current[index-1] 
        ){
            //move focus to the previous input field on backspace
            inpuRefs.current[index-1].focus()
        }
    }
  return (
    <div>
        {
            otp.map((value,index)=>{
             return <input 
             key={index}
             type="text"
             ref={(input)=>(inpuRefs.current[index]= input)}
             value={value}
             onChange={(e)=>handleChange(index,e)}
             onClick={()=>handleClick(index)}
             onKeyDown={(e)=>handleKeyDown(index,e)}
             className="otpInput"
             />
            })
        }
    </div>
  )
}

export default OtpInput