//add to db
const AddToDb = (id) => {
    const existedCourse = GetDb();
    if (id in existedCourse) {
        existedCourse[id] += 1;
    }
    else {
        existedCourse[id] = 1;
    }
    UpdateDb(existedCourse)
}
const UpdateDb = course => {
    localStorage.setItem("enroll_course", JSON.stringify(course));
}
const GetDb = () => {
    const course = localStorage.getItem("enroll_course");
    return course ? JSON.parse(course) : {};
}

export { AddToDb, GetDb }