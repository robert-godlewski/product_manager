//creates products
import React, {useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const {productList, setProductList} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title, 
            price, 
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //rerender the frontend with the new product
                setProductList([...productList, res.data]);
                //Clearing all fields in the form
                setTitle("");
                setPrice("");
                setDescription("");
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
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default CreateProduct;