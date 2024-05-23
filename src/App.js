import React, { useMemo } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { DataProvider } from "./context/dataContext";

function App() {
  const quizzes = useMemo(() => {
    const fileName = {
      "/1": "1.json",
      "/2": "2.json",
      "/3": "3.json",
      "/4": "4.json",
      "/5": "5.json",
    };
    return fileName[window.location.pathname] || "1.json";
  }, []);

  return (
    <DataProvider quizzes={quizzes}>
      {/* Welcome Page */}
      <Start />

      {/* Quiz Page */}
      <Quiz />

      {/* Result Page */}
      <Result />
    </DataProvider>
  );
}

export default App;
