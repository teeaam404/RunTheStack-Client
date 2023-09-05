import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const CourseDetails = () => {
  const { _id } = useParams();
  console.log(_id);
  const [details, setDetails] = useState(null);


  useEffect(() => {
    fetch(`https://run-the-stack-server-delta.vercel.app/courses`)
      .then((res) => res.json())
      .then((data) => {
        const course = data.find((course) => course.id == _id);
        if (course) {
          setDetails(course);
        } else {
          console.error(`Course with id ${_id} not found`);
        }
      })
      .catch((error) => console.error(error));
  }, [_id]);

  return (
    <div>
      {details && (
        <div className="hero min-h-screen bg-base-200 p-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={details.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{details.course_name}</h1>
              <p className="text-xl font-bold">
                Instructor Name: {details.instructor_name}
              </p>
              <p>Duration: {details.duration}</p>
              <div className="text-xl font-bold">
                <p>
                  Price:{" "}
                  <span className="text-red-400 line-through">
                    ${details.price}
                  </span>{' '}
                  ${details.discount}
                </p>
              </div>
              <div className="my-5">
                <Rating
                  style={{ maxWidth: 110 }}
                  value={details.rating}
                  readOnly
                ></Rating>
              </div>
              <p className="py-6">{details.description}</p>
              <Link to={'/payment'} details={details} className="btn btn-outline btn-secondary">
                Pay
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
