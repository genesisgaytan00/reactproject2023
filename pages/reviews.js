import React, { useState } from 'react';
import { comments } from '../data/db';
import Addr from '/pages/addr';
import styles from "../styles/home.module.css";

const Reviews = () => {
    const [reviewList, setReviewList] = useState(comments);
    const handleAddReview = (newReview) => {
        setReviewList([...reviewList, newReview]);
        
    };
    const handleDeleteReview = (index) => {
        const updatedReviews = [...reviewList];
        updatedReviews.splice(index, 1);
        setReviewList(updatedReviews);
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviewList.map((comment, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">{comment.title}</h3>
                        <p className="text-gray-600">{comment.body}</p>
                        <p className="text-gray-600">{comment.rating}</p>
                        <button className={`${styles['delete-button']}`} onClick={() => handleDeleteReview(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <Addr onSubmit={handleAddReview} />
        </div>
    );
};

export default Reviews;
