import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Loading() {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    useEffect(()=>{
        const timer = setInterval(()=>(
            setCount(prevCount => --prevCount)
        ), 1000);

        if(count === 1){
            navigate("/login")
        }

        return ()=>{
            setInterval(timer)
        }
    },[count])
  return (
    <div style={{alignItems:"center"}}>
        <img src="/image/Loading.avif" alt="Loading..." />
    </div>
  )
}

export default Loading