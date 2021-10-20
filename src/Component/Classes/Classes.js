import { GetDb } from '../../AddToDb/AddToDb';
import useData from '../Hooks/useData';
import EnrollCourse from '../ServiceDetails/EnrollCourse';

const Classes = () => {
    const getDb = GetDb();
    const [course] = useData();
    let enroll = [];
    for (const id in getDb) {
        const existed = course.filter(cour => cour.id === parseInt(id));
        if (existed) {
            const quantity = getDb[id];
            existed.quantity = quantity;
            enroll.push(...existed)
        }
    }
    //calculate the price
    let price = 0;
    for (const i of enroll) {
        price += i.price
    }
    //delete enroll
    const deleteEnroll = (e) => {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    }
    return (
        <div className="w-3/4 mx-auto my-10">
            <div className="grid grid-cols-4 text-center">
                <p>ID</p>
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
            </div>
            {
                enroll
                    ? enroll.map(course => <EnrollCourse deleteEnroll={deleteEnroll} enrolled={course}></EnrollCourse>)
                    :
                    <div className="h-screen flex justify-center items-center">
                        <p>you haven't enroll yet</p>
                    </div>
            }
            <div className="grid grid-cols-4 text-center">
                <p></p>
                <p></p>
                <p>Total = </p>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default Classes;