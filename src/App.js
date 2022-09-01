import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import {useState,useEffect} from 'react'
import ProductPage from './pages/ProductPage'

function App() {

  const[apiData,setApiData] = useState([])

  const fetchData = ()=>{
    fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
      .then(res => res.json())
      .then(data => setApiData(data.content))
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard data={apiData}/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path='/details/:id' element={<ProductPage data={apiData}/>}/>
{/* If no links matches as above */}
          <Route path="*" element={<>Page Not Found</>} />

        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
