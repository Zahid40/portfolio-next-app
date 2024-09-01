import React from 'react';

const DynamicPattern = ({ strokeColor = 'black', strokeWidth = 0.5, width = 200, height = 200 }) => {
  const horizontalRepeats = Math.ceil(width / 200);
  const verticalRepeats = Math.ceil(height / 200);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip0-${width}-${height}`}>
          <rect width={width} height={height} fill="white" />
        </clipPath>
        <clipPath id={`clip1-${width}-${height}`}>
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip0-${width}-${height})`}>
        {[...Array(verticalRepeats)].map((_, rowIndex) => (
          [...Array(horizontalRepeats)].map((_, colIndex) => (
            <g
              key={`${rowIndex}-${colIndex}`}
              transform={`translate(${colIndex * 200}, ${rowIndex * 200})`}
            >
              <g clipPath={`url(#clip1-${width}-${height})`}>
                {[...Array(4)].map((_, rowIndex) => (
                  [...Array(4)].map((_, colIndex) => (
                    <path
                      key={`${rowIndex}-${colIndex}`}
                      d={`M${(colIndex * 66.667) + 33.3327} ${(rowIndex * 66.667) - 33.3333}H${(colIndex * 66.667) - 33.334}V${(rowIndex * 66.667) + 33.3334}H${(colIndex * 66.667) + 33.3327}V${(rowIndex * 66.667) - 33.3333}Z`}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                    />
                  ))
                ))}
              </g>
            </g>
          ))
        ))}
      </g>
    </svg>
  );
};

export default DynamicPattern;
