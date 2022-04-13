import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000//api/products', {
            title: title,
            price: price,
            description: description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice(0);
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
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} name="price" />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} name="description" />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProductForm;