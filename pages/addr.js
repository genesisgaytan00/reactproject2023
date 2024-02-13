import React, { useState } from 'react';
import styles from "../styles/home.module.css";

const Addr = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            title,
            body,
            rating
        };
        onSubmit(newReview);
        setTitle('');
        setBody('');
        setRating('');
    };
    return (
        <div className={styles.form}>
            <h1>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};
export default Addr;
