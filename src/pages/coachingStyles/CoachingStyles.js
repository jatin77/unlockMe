import React, { useContext } from "react";
import { RoomContext } from "../../context.js";
import CareerPage from "../../component/careerPage/CareerPage.js";
import ExecutivePage from "../../component/executivePage/ExecutivePage.js";
import PerformancePage from "../../component/performance/PerformancePage.js";
const CoachingStyles = () => {
  const { page } = useContext(RoomContext);

  switch (page) {
    case "career":
      return <CareerPage />;
      break;
    case "executive":
      return <ExecutivePage />;
      break;
    case "performance":
      return <PerformancePage />;
      break;
    default:
      return <CareerPage />;
  }
};

export default CoachingStyles;
