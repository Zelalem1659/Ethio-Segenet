import React from "react";
import { useParams } from "react-router-dom";

function NewsCategory() {
  const { category } = useParams();

  const titles = {
    politics: "ፖለቲካ ዜናዎች",
    economy: "ኢኮኖሚ ዜናዎች",
    culture: "ባህላዊ ዜናዎች",
    sport: "ስፖርት ዜናዎች",
    "world-politics": "ዓለም ፖለቲካ ዜናዎች",
    "world-economy": "ዓለም ኢኮኖሚ ዜናዎች",
    technology: "ቴክኖሎጂ ዜናዎች",
    health: "ጤና ዜናዎች",
  };

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-extrabold mb-4 gold-text">
        {titles[category] || "ዜና"}
      </h1>
      <p className="text-lg text-gray-600">
        በዚህ ክፍል የተመረጠውን ዜና ያዩ።
      </p>
    </div>
  );
}

export default NewsCategory;
