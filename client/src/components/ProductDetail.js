import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ProductDetail = (props) => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        //findOneProduct
        //Check out the get link around the id variable
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);

    return (
        <div>
            <p>hello</p>
            <h3>{oneProduct.title}</h3>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    );
};

export default ProductDetail;
