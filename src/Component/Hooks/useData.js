import { useEffect, useState } from "react";

const useData = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./FackDb.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses, setCourses];
}
export default useData;