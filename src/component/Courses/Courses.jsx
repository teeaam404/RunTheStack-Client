import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  // https://run-the-stack-server-delta.vercel.app

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mx-5 gap-10">
        {courses.slice(0, showAll ? 18 : 9).map((course) => (
          <div key={course._id} className="card w-96 glass">
            <figure>
              <img className="w-full h-52" src={course.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.course_name}</h2>
              <h3>Duration: {course.duration}</h3>
              <h1>Instructor Name: {course.instructor_name}</h1>
              <div>
                <Rating
                  style={{ maxWidth: 110 }}
                  className=""
                  value={course.rating}
                  readOnly
                ></Rating>
              </div>
              <div className="card-actions justify-end">
                <Link
                  to={`/courseDetails/${course._id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="items-center text-center my-10">
        {!showAll && (
          <span onClick={handleShowAll}>
            <Link className="btn btn-outline">See More</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Courses;
