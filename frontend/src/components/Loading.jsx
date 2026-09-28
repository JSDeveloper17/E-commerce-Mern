import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Loading() {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        const timer = setInterval(()=>(
            setCount(prevCount => --prevCount)
        ), 1000);

        if(count === 1){
            navigate("/login",{
                state: location.pathname
            })
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