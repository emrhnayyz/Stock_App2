// https://tr.legacy.reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.

// const deger = useExample()
// const {deger,fonksiyon}= useExample()

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, registerSuccess,loginSuccess, logoutSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector(state => state.auth);
  const Url = "http://15116.fullstack.clarusway.com/"

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const login = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${Url}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async ()=>{
    dispatch(fetchStart());
    try {
      await axios.post(`${Url}account/auth/logout/`,null,{headers:{
        Authorization:`Token ${token}`
      }});
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed")
      navigate("/")

      
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed")
      
    }
  }

  const register = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${Url}account/register/`,
        userInfo
      );

      console.log(data);
     
      dispatch(registerSuccess(data));
      toastSuccessNotify("Login performed")
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
