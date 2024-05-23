import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <a
              href="/1"
              className="btn mx-2 px-4 py-2 bg-light text-dark fw-bold"
            >
              Code 1
            </a>
            <a
              href="/2"
              className="btn mx-2 px-4 py-2 bg-light text-dark fw-bold"
            >
              Code 2
            </a>
            <a
              href="/3"
              className="btn mx-2 px-4 py-2 bg-light text-dark fw-bold"
            >
              Code 3
            </a>
            <a
              href="/4"
              className="btn mx-2 px-4 py-2 bg-light text-dark fw-bold"
            >
              Code 4
            </a>
            <h1 className="fw-bold mb-4">Choose quiz then click start</h1>

            <button
              onClick={startQuiz}
              className="btn px-4 py-2 bg-light text-dark fw-bold"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
