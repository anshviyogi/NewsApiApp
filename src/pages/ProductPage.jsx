import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

function ProductPage({data}) {
const[apiData,setApiData] = useState('')

    const id = useParams()
    useEffect(()=>{
        {data.filter(dataList =>{
            if(dataList.postId == id.id){
                setApiData(dataList)
            }
        })}
    })

    console.log(apiData)
  return (
    <div style={{marginLeft:"65px"}}>
        <h1 style={{textAlign:"center",marginBottom:"20px"}}>News Today</h1>

        <div className="container" style={{display:"flex"}}>
            {/* Left Side */}
            <img src={apiData.coverImageUrl} style={{marginRight:"20px"}}/>

            {/* Right Side */}
            <div className='productInfo' style={{marginTop:"10px"}}>
                <h3 style={{marginBottom:"20px"}}>{apiData.title}</h3>
                <p>{apiData.summary}</p>
            </div>
        </div>

    </div>
  )
}

export default ProductPage