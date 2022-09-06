
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';


function Details() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
const {id} =useParams();



    useEffect(() => {
        dispatch(fetchProducts());
        
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

for(var i = 0; i <products.length; i++) {
if(products[i].id == id){
const product = products[i];

    return (

        <div className="productsWrapper"  >
      
            <div className="card" key={product.id} style={{
width:'500px',
height:'500px',
alignItems: "center"

        }}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={() => handleAdd(product)} className="btn">
                    Add to cart
                </button>
              
            </div>
   
    </div>
      )

}else{
    console.log("error");
}


}
  
}

export default Details
