import axios from "axios";


export const get_all_product = () => {
    return axios.get("/get_all_product") 
    .then((res) => res.data)
    .catch(err=>{
      console.log(err)
    });

  };
  
