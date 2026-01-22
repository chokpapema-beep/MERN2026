import React from 'react'

const Course = () => {
    const courseData =[
        {
            id:1,
            courseName: "MERN STACK",
            courseDescription:
            "hergjfw fdhhjgaf fdshuugds njgjgn",
            courseImage: "",
            price:12000,
        },
        {
             id:2,
            courseName: "HTML",
            courseDescription:
            "hergjfw fdhhjgaf fdshuugds njgjgn hbjdfa",
            courseImage: "",
            price: 15000,
        },
        {
             id:3,
            courseName: "DSA",
            courseDescription:
            "hergjfw fdhhjgaf fdshuugds njgjgn",
            courseImage: "",
            price: 5000,
        },
    ];
  return (
    <div> {courseData.map((value, index)=>(
        <div key={index}>
            {value.courseName}
            {value.price}
            </div>
        ))}
    </div>
  );
};

export default Course
