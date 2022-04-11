import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type="Submit" value="Create" />
        </form>
    )
}

export default ProductForm;