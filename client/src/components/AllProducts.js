//gets all of the products
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
    const {productList, setProductList} = props;

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
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;
