import React, { useState } from 'react';
import axios from 'axios';

const MobileForm = () => {
    const [mobile, setMobile] = useState({
        name: '',
        ram: '',
        price: '',
        image: null
    });

    const handleChange = (event) => {
        if (event.target.name === 'image') {
            setMobile({
                ...mobile,
                image: event.target.files[0]
            });
        } else {
            setMobile({
                ...mobile,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', mobile.name);
            formData.append('ram', mobile.ram);
            formData.append('price', mobile.price);
            formData.append('image', mobile.image);

            await axios.post('/api/mobiles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMobile({
                name: '',
                ram: '',
                price: '',
                image: null
            });

            alert('Mobile details submitted successfully!');
        } catch (error) {
            console.error('Error submitting mobile details:', error);
            alert('Failed to submit,Sorry try Again');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Mobile Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={mobile.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ram">RAM:</label>
                <input
                    type="text"
                    id="ram"
                    name="ram"
                    value={mobile.ram}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={mobile.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MobileForm;
