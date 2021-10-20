import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import CourseDetailsComponent from './CourseDetailsComponent';

const ServiceDetails = () => {
    const params = useParams();
    const [courses] = useData();
    const course = [];
    for (const i of courses) {
        if (i.id === parseInt(params.id)) {
            course.push(i);
        }
    }
    return (
        <div>
            {
                (course.length)
                    ? <CourseDetailsComponent course={course}></CourseDetailsComponent>
                    : console.log("nothing found")
            }
        </div>
    );
};

export default ServiceDetails;