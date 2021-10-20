import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Couse = (props) => {
    const { img, name, teacher, rating, totalRating, view, time, price, id } = props.course;
    return (
        <div className="border rounded shadow-2xl">
            <img src={img} alt="" />
            <div className="py-5 px-4 leading-8">
                <h2 className="text-xl font-semibold mt-2">{name}</h2>
                <p>by: {teacher}</p>
                <h3 className="text-xl font-bold text-yellow-900 my-2">Price: ${price}</h3>
                <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    className="text-yellow-400"
                ></Rating>
                <span className="ml-2">{rating} ({totalRating} Review)</span>
                <div>
                    <i className="far fa-eye"></i> {view}
                    <span className="ml-7">
                        <i className="far fa-clock"></i> {time}
                    </span>
                </div>
                <Link to={`/services/details/${id}`} className="flex justify-center mt-5">
                    <button className="border rounded-md px-5 w-3/4 bg-blue-400 text-white text-xl py-1">
                        View Details
                        <i className="fas fa-angle-double-right ml-3"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Couse;