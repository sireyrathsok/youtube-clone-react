import React from "react";
import "../../index.css";

const TestTest = () => {
  return (
    <div className="container mx-auto p-4 overflow-x-hidden bg-red-50">
      <div className="flex flex-no-wrap">
        {/* Your content goes here */}
        <div className="flex-shrink-0 w-1/5 p-4 bg-gray-300 m-2">Item 1</div>
        <div className="flex-shrink-0 w-1/5 p-4 bg-gray-300 m-2">Item 2</div>
        <div className="flex-shrink-0 w-1/5 p-4 bg-gray-300 m-2">Item 3</div>
        <div className="flex-shrink-0 w-1/5 p-4 bg-gray-300 m-2">Item 4</div>
        <div className="flex-shrink-0 w-1/5 p-4 bg-gray-300 m-2">Item 5</div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default TestTest;
