import React from "react";
import Rating from "react-rating";
import "./CourseList.css";
const numberWithCommas = (num) => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const CourseList = (props) => {
  const { course_name, image, category, duration, price, rating, reviews } =
    props.course;

  return (
    <div className="col-xl-4 col-md-6">
      <div className="properties" data-slick-index="-3" aria-hidden="true">
        <div className="properties__card">
          <div className="properties__img">
            <img src={image} alt="course" />
          </div>
          <div className="properties__caption">
            <p className="mb-1">Category : {category}</p>
            <p>Duration : {duration} Hours</p>
            <h3>{course_name}</h3>
            <div className="properties__footer d-flex justify-content-between align-items-center">
              <div className="restaurant-name">
                <div className="rating">
                  <Rating
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                    initialRating={rating}
                    readonly
                  />
                </div>
                <p>
                  <span>({rating})</span> based on {numberWithCommas(reviews)}
                </p>
              </div>
              <div className="price">
                <span>${price}</span>
              </div>
            </div>
            <button
              className="border-btn border-btn2"
              onClick={props.loadAllCourses}
            >
              Mode Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
