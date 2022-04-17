//get one product
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const OneProduct = (props) => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);

    return (
        <div>
            <h3>{oneProduct.title}</h3>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default OneProduct;
