//gets all of the products
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
    const {productList, setProductList} = props;
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const filteredList = productList.filter((product, index) => product._id !== productId);
                setProductList(filteredList);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {console.log(err)});
    }, []);

    return (
        <div>
            <h3>Products List</h3>
            {
                productList.map((product, index) => (
                    <div key={product._id}>
                        <div>
                            <Link to={`/products/get/${product._id}`}>
                                {product.title}
                            </Link>
                        </div>
                        {
                        //<Link to={`/products/edit/${product._id}`}>edit</Link>
                        //Button version below
                        }
                        <button onClick={() => navigate(`/products/edit/${product._id}`)}>
                            Edit
                        </button>
                        <button onClick={(e) => {deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;
