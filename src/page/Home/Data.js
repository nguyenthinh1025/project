import React, { useState } from 'react';

const Data = () => {
    const exampleArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','1','2','3','4','5','6','7','8'];
    const [startIndex, setStartIndex] = useState(0);

    const moveToNext = () => {
        setStartIndex(startIndex + 8);
    };

    const moveToPrevious = () => {
        setStartIndex(startIndex - 8);
    };

    const visibleItems = exampleArray.slice(startIndex, startIndex + 8);

    return (
        <div>
            {visibleItems.map((item, index) => (
                <div key={index}>
                    Item {startIndex + index + 1}: {item}
                </div>
            ))}
            <button onClick={moveToPrevious} disabled={startIndex === 0}>Chuyển về trước</button>
            <button onClick={moveToNext} disabled={startIndex + 8 >= exampleArray.length}>Chuyển về sau</button>
        </div>
    );
};

export default Data;
