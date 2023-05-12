import React from 'react';

const Grid = () => {
  return (
    <div className="min-h-screen flex items-center bg-purple-500">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-6 grid-rows-4 gap-8 grid-flow-row">
          <li className="col-span-3 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-3 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-2 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-2 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-2 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-2 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-3 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
          <li className="col-span-3 bg-white rounded-lg shadow-xl">
            <div className="h-24"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Grid;
