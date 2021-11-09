import { useParams } from "react-router";

// =============================== Notes ===============================
// useParams - Returns an object of the params for the route rendered 
// =====================================================================

const ProductDetail = (props) => {
  
  const params = useParams();

  const objList = props.listData.filter(item => {
    if (item.id === params.productId){
      return item.name
    }
  })

 

  return (
    <section>
      <h1>Products Details...</h1>
      <h2>{objList[0].name}</h2>
      <p>{params.productId}</p>
      {/* <p>Page Params is {params.productId}</p> */}
    </section>
  );
};

export default ProductDetail; 
