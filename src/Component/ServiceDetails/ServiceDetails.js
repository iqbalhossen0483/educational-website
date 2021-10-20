import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CourseDetailsComponent from './CourseDetailsComponent';

const ServiceDetails = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("/FackDb.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const params = useParams();
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