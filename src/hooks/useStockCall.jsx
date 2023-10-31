import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getProCatBrandSucces,
  getProPurcFirBrandsSucces,
  getProSalBrandsSucces,
  getSucces,
} from "../features/stockSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { axiosWithToken } = useAxios()

  //   const getFirms = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "firms";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"firms"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //   const getBrands = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/brands/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "brands";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"brands"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //!We can perform more than one get operation with a single function by establishing a more dynamical structure instead of writing each time as above. 
  // const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const getStockData = async (url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSucces({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const deleteStockData = async (url,id) => {
  //   dispatch(fetchStart());
  //   try {
  //      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     getStockData(url);
  //     toastSuccessNotify(`${url} successfuly deleted!`)
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} not successfuly deleted!`);

  //   }
  // };

  //! Instead of writing the common values such as base_url and token each time, we define them there by using axios instance. And then we just need to write the end point that we want to request.
  //?Axios Instance


  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {


      const { data } = await axiosWithToken.get(`stock/${url}/`);

      console.log(data);
      dispatch(getSucces({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly deleted!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly deleted!`);

    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly created!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly created!`);
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly updated!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly updated!`);
    }
  };

  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, brands, categories] = await Promise.all([
        axiosWithToken.get(`stock/products/`),
        axiosWithToken.get(`stock/brands/`),
        axiosWithToken.get(`stock/categories/`),
      ]);

      dispatch(
        getProCatBrandSucces([products?.data, brands?.data, categories?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProSalBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, brands, sales] = await Promise.all([
        axiosWithToken.get(`stock/products/`),
        axiosWithToken.get(`stock/brands/`),
        axiosWithToken.get(`stock/sales/`),
      ]);

      dispatch(
        getProSalBrandsSucces([products?.data, brands?.data, sales?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProPurcFirBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, purchases, firms, brands] = await Promise.all([
        axiosWithToken.get(`stock/products/`),
        axiosWithToken.get(`stock/purchases/`),
        axiosWithToken.get(`stock/firms/`),
        axiosWithToken.get(`stock/brands/`),
      ]);

      dispatch(
        getProPurcFirBrandsSucces([
          products?.data,
          purchases?.data,
          firms?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProCatBrand,
    getProSalBrands,
    getProPurcFirBrands,
  };
};

export default useStockCall;
