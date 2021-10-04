import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CourseList from "../../Courses/CoursesList";

const HomeCourses = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const loadCourses = async () => {
      const response = await fetch("./api.json");
      const responseData = await response.json();
      setCourses(responseData.slice(0, 6));
    };
    loadCourses();
  }, []);
  return (
    /* Home Course Section */
    <section className="courses">
      <h2>Our Featured Courses</h2>
      <div className="container">
        <div className="row gy-5">
          {courses.map((course) => (
            <CourseList key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center my-5">
          <button
            onClick={() => history.push("/courses")}
            className="btn border-btn"
          >
            View More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
