import React from 'react';
import Rating from 'react-rating';

const CourseDetailsComponent = (props) => {
    const { img, name, teacher, rating, totalRating, view, time, price, description } = props.course[0];
    return (
        <div className="lg:grid grid-cols-2 my-10 gap-5 px-5">
            <div className="flex lg:justify-end justify-center">
                <img className="w-4/5" src={img} alt="" />
            </div>
            <div className="px-4 leading-8 lg:pl-7">
                <h2 className="sm:text-3xl text-2xl font-semibold text-blue-600">{name}</h2>
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
                        <i class="far fa-clock"></i> {time}
                    </span>
                </div>
                <p className="lg:text-xl mt-5">{description}</p>
            </div>
        </div>
    );
};

export default CourseDetailsComponent;