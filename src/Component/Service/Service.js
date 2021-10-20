import React from 'react';
import useCourses from "../Hooks/useData";
import Course from "../Home/Couse"

const Service = () => {
    const [courses] = useCourses();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-5 px-10">
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Service;