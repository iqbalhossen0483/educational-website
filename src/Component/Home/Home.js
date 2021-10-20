import img from "../../Images/xh1_hero1.jpg.pagespeed.ic.rL9QpsJIIe.webp";
import React from 'react';
import useData from '../Hooks/useData';
import Couse from "./Couse";
import { Link } from "react-router-dom";

const Home = () => {
    const [courses] = useData();
    const teporaryData = [];
    const newCourse = [];
    for (const course of courses) {
        teporaryData.push(course);
        if (teporaryData.length < 5) {
            newCourse.push(course)
        }
    }
    return (
        <>
            <section className="md:grid grid-cols-2 bg-blue-500">
                <div className="lg:flex justify-center items-center">
                    <div className="px-3">
                        <h2 className="text-3xl lg:text-5xl font-semibold">Learn new skills online with top educators</h2>
                        <p className="text-xl lg:text-2xl mt-4">Learn 100% online with world-class universities and industry experts.</p>
                        <i className="fas fa-search absolute py-12 px-3 md:px-7 text-2xl text-gray-600"></i>
                        <input className="w-3/4 px-10 py-2 rounded md:ml-5 mt-10 text-xl focus:outline-none" type="text" placeholder="What are you looking for?" />
                    </div>
                </div>
                <img className="pt-8 md:pt-0" src={img} alt="" />
            </section>
            <section className="px-5">
                <div className="text-center mt-14">
                    <h1 className="text-5xl font-bold">Our Courses</h1>
                    <p className="text-xl mt-1">The world's largest selection of courses</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 mb-5">
                    {
                        newCourse.map(course => <Couse
                            key={course.id}
                            course={course}></Couse>)
                    }
                </div>
                <Link to="/services" className="flex justify-center mb-8">
                    <button className="border rounded-md px-5 py-1 w-52 text-xl bg-blue-400 text-white">
                        See all course
                        <i className="fas fa-angle-double-right ml-3"></i>
                    </button>
                </Link>
            </section>
        </>
    );
};

export default Home;