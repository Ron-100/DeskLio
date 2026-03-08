
const DonutTaskChart = () => {
  const radius = 100;
  const stroke = 25;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const segments = [
    { percent: 40, color: "#7DB7E8" }, // blue
    { percent: 35, color: "#6FCF97" }, // green
    { percent: 60, color: "#F2C94C" }, // yellow
    { percent: 20, color: "#EB5757" }, // red
  ];

  let cumulativePercent = 0;

  return (
    <div className="relative w-50 h-50 flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="-rotate-90deg">
        {segments.map((segment, index) => {
          const strokeDasharray = `${
            (segment.percent / 100) * circumference
          } ${circumference}`;

          const strokeDashoffset =
            circumference - (cumulativePercent / 100) * circumference;

          cumulativePercent += segment.percent;

          return (
            <circle
              key={index}
              stroke={segment.color}
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Center circle */}
      <div className="absolute w-34 h-34 rounded-full bg-gray-100 dark:bg-gray-800"></div>

      {/* Tooltip */}
      {/* <div className="absolute -right-15 -top-20 bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        <div className="font-semibold">Task Done</div>
        <div className="text-green-400">● 250 Tasks</div>
      </div> */}
    </div>
  );
};

export default DonutTaskChart;