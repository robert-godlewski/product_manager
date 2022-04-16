import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //route us back to Main.js
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
            <div>
                    <label>Title</label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title} 
                        name="title" 
                        type="text" 
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        onChange={(e) => setPrice(e.target.valueAsNumber)} 
                        value={price} 
                        name="price" 
                        type="number" 
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description} 
                        name="description" 
                        type="text" 
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
};

export default UpdateProduct;
