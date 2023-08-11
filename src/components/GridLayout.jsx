import React from 'react';

function GridLayout({ savedLists }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 mt-16 mb-8">
      {savedLists.map((list, index) => (
        <div key={index} className="card text-black">
          {list.name} {/* Assuming each saved list has a 'name' property */}
        </div>
      ))}
    </div>
  );
}

export default GridLayout;
