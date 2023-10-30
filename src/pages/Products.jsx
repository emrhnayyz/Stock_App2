// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
// import axios from "axios";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import { flex } from "../styles/globalStyle";
import ProductModal from "../components/modals/ProductModal";

const Products = () => {
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);

  const { getStockData } = useStockCall();
  const { products } = useSelector(state => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      category_id: "",
      brand_id: "",
    });
    //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  };
  const [info, setInfo] = useState({
    name: "",
    category_id : "",
    brand_id: "",
    
  });




  useEffect(() => {
    // getFirms();
    getStockData("products");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      
     
    </div>
  );
};

export default Products;
