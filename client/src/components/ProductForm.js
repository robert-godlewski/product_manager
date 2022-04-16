import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ProductForm = (props) => {
    //const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //createProduct
        //look at the object after the link in the get request to match the backend.
        axios
            .post('http://localhost:8000/api/products', {
                title, price, description
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //setProductList([...productList, res.data]);
                //Clearing all fields in the form
                setTitle("");
                setPrice("");
                setDescription("");
                navigate("/");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title</label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title} 
                        name="title" 
                        type="text" 
                    />
                    {title.length < 2 ? <p>Your title needs to be at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        onChange={(e) => setPrice(e.target.valueAsNumber)} 
                        value={price} 
                        name="price" 
                        type="number" 
                    />
                    {price < 0.009 ? <p>Your price needs to be at least more than 1 penny ($0.01)</p> : null}
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description} 
                        name="description" 
                        type="text" 
                    />
                    {description.length < 8 ? <p>Your description needs to be at least 8 characters.</p> : null}
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProductForm;