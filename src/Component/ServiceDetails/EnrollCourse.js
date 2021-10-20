import React from 'react';

const EnrollCourse = (props) => {
    const { id, img, name, price } = props.enrolled;
    return (
        <div className="grid grid-cols-4 border py-2 leading-10 text-center">
            <p>{id}</p>
            <img className="w-28" src={img} alt="" />
            <p>{name}</p>
            <p>
                ${price}
                <i onClick={(e) => props.deleteEnroll(e)} className="fas fa-times ml-8 text-xl text-gray-600"></i>
            </p>
        </div>
    );
};

export default EnrollCourse;