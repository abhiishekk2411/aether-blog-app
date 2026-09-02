import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const appContext = createContext();
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs=async()=>{
        try {
            const {data}=await axios.get('/api/blogs/all');
            data.success ? setBlogs(data.blogs) : toast.error(data.message);
        } catch (error){
            toast.error(error.message);
            
        }
    }
//jab bhi browser khulega to fetchblogs chal jayega kyuki useEffect use kiya hia 
    useEffect(()=>{
        fetchBlogs();
        //for authentication token search
        const token=localStorage.getItem('token');
        if(token){
            setToken(token);
            // Axios se jaane wali har request ke saath Authorization header mein ye token automatically bhej do.
            axios.defaults.headers.common['Authorization']=`${token}`;
        }
    },[])

    const value = {
        axios, token, setToken, blogs, setBlogs, input, setInput
    };
    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(appContext);
}