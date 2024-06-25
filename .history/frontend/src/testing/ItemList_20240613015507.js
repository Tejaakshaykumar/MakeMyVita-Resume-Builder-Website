import React from 'react';
import axios from 'axios';

const ItemList = ({ items, fetchItems }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            fetchItems();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    <span>{item.name}: {item.description}</span>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
