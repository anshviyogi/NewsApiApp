import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ContentData from "./ContentData";
import './Dashboard.css'

const Dashboard = ({data}) => {

  return <div className="dashboard">
    <h1 style={{marginLeft:"40px",textAlign:"center",fontWeight:"bolder",marginTop:"10px",marginBottom:"25px"}}>News Today</h1>
    <div className="data">
  
    {data.map(data =>(
      <Link to={`/details/${data.postId}`} className="links">
      <ContentData data={data}/>
      </Link>
    ))}
  
    </div>
  </div>;
};

export default Dashboard;