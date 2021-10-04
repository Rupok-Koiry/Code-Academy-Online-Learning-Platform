import React, { useEffect, useState } from "react";
import "./Courses.css";
import CoursesList from "./CoursesList";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Load data from fake api
    const loadCourses = async () => {
      const response = await fetch("./api.json");
      const responseData = await response.json();
      setCourses(responseData);
    };
    loadCourses();
  }, []);
  return (
    /*All Courses Section */
    <section className="courses">
      <h2>All Courses</h2>
      <div className="container">
        <div className="row gy-5">
          {courses.map((course) => (
            <CoursesList key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
