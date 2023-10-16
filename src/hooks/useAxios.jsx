import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';



const useAxios = () => {
    const { token } = useSelector(state => state.auth);

    const axiosWithToken = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        
        headers: {Authorization: `Token ${token}`}
      });

      const axiosWithPublic = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        
    
      });

      return {axiosWithToken,axiosWithPublic}
}

export default useAxios