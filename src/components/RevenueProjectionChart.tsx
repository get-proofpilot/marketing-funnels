import { useEffect, useState } from 'react';

interface RevenueProjectionChartProps {
  currentRevenue: number;
  projectedRevenue: number;
  scenarioColor: 'orange' | 'blue' | 'green';
  scenarioLabel: string;
}

export default function RevenueProjectionChart({
  currentRevenue,
  projectedRevenue,
  scenarioColor,
  scenarioLabel,
}: RevenueProjectionChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const months = ['Now', 'Mo 1', 'Mo 2', 'Mo 3', 'Mo 4', 'Mo 5', 'Mo 6', 'Mo 7', 'Mo 8', 'Mo 9', 'Mo 10', 'Mo 11', 'Mo 12'];

  // Generate growth curve data (gradual ramp up to projected revenue)
  const generateGrowthCurve = () => {
    const dataPoints = [];
    const diff = projectedRevenue - currentRevenue;

    for (let i = 0; i <= 12; i++) {
      // Use an easing function for smooth growth curve
      const progress = i / 12;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      const value = currentRevenue + (diff * easedProgress);
      dataPoints.push(value);
    }

    return dataPoints;
  };

  const dataPoints = generateGrowthCurve();
  const maxValue = Math.max(...dataPoints) * 1.1; // Add 10% padding

  // Chart dimensions
  const width = 800;
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate positions
  const xStep = chartWidth / (dataPoints.length - 1);
  const yScale = (value: number) => chartHeight - ((value / maxValue) * chartHeight);

  // Generate smooth curve path using quadratic bezier curves
  const generatePath = () => {
    if (dataPoints.length === 0) return '';

    let path = `M ${padding.left} ${padding.top + yScale(dataPoints[0])}`;

    for (let i = 1; i < dataPoints.length; i++) {
      const x = padding.left + (i * xStep);
      const y = padding.top + yScale(dataPoints[i]);
      const prevX = padding.left + ((i - 1) * xStep);
      const prevY = padding.top + yScale(dataPoints[i - 1]);

      // Control point for smooth curve
      const cpX = (prevX + x) / 2;

      path += ` Q ${cpX} ${prevY}, ${x} ${y}`;
    }

    return path;
  };

  // Generate area fill path
  const generateAreaPath = () => {
    const linePath = generatePath();
    const lastX = padding.left + ((dataPoints.length - 1) * xStep);
    return `${linePath} L ${lastX} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`;
  };

  const colorConfig = {
    orange: {
      gradient: ['#FB923C', '#F97316'],
      line: '#F97316',
      glow: 'rgba(249, 115, 22, 0.3)',
      area: 'url(#orangeGradient)',
    },
    blue: {
      gradient: ['#60A5FA', '#3B82F6'],
      line: '#3B82F6',
      glow: 'rgba(59, 130, 246, 0.3)',
      area: 'url(#blueGradient)',
    },
    green: {
      gradient: ['#4ADE80', '#22C55E'],
      line: '#22C55E',
      glow: 'rgba(34, 197, 94, 0.3)',
      area: 'url(#greenGradient)',
    },
  }[scenarioColor];

  return (
    <div className="relative bg-slate-900 rounded-2xl p-6 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">12-Month Revenue Projection</h5>
            <p className="text-2xl font-black text-white">{scenarioLabel} Scenario Growth</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-400 mb-1">Projected Monthly Revenue</p>
            <p className="text-2xl font-black text-white">${projectedRevenue.toLocaleString()}</p>
          </div>
        </div>

        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.05" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Y-axis grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((fraction, i) => {
            const y = padding.top + (chartHeight * (1 - fraction));
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  fill="rgba(255,255,255,0.5)"
                  fontSize="11"
                  textAnchor="end"
                  fontWeight="600"
                >
                  ${Math.round((maxValue * fraction) / 1000)}k
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {months.map((month, i) => {
            const x = padding.left + (i * xStep);
            return (
              <text
                key={i}
                x={x}
                y={height - padding.bottom + 20}
                fill="rgba(255,255,255,0.5)"
                fontSize="10"
                textAnchor="middle"
                fontWeight="600"
              >
                {month}
              </text>
            );
          })}

          {/* Area under curve with gradient */}
          <path
            d={generateAreaPath()}
            fill={colorConfig.area}
            opacity={mounted ? 1 : 0}
            style={{
              transition: 'opacity 1s ease-out',
            }}
          />

          {/* Main line with glow */}
          <path
            d={generatePath()}
            fill="none"
            stroke={colorConfig.line}
            strokeWidth="3"
            filter="url(#glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={mounted ? 1 : 0}
            style={{
              transition: 'opacity 1s ease-out 0.2s',
            }}
          />

          {/* Data points */}
          {dataPoints.map((value, i) => {
            const x = padding.left + (i * xStep);
            const y = padding.top + yScale(value);

            return (
              <g key={i} opacity={mounted ? 1 : 0} style={{ transition: `opacity 0.5s ease-out ${0.5 + (i * 0.05)}s` }}>
                {/* Outer glow circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill={colorConfig.glow}
                  className="animate-pulse"
                />
                {/* Inner solid circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="3"
                  fill={colorConfig.line}
                />
              </g>
            );
          })}

          {/* Current revenue marker line */}
          <line
            x1={padding.left}
            y1={padding.top + yScale(currentRevenue)}
            x2={width - padding.right}
            y2={padding.top + yScale(currentRevenue)}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <text
            x={width - padding.right}
            y={padding.top + yScale(currentRevenue) - 8}
            fill="rgba(255,255,255,0.6)"
            fontSize="11"
            textAnchor="end"
            fontWeight="700"
          >
            Current: ${currentRevenue.toLocaleString()}
          </text>
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: colorConfig.line }}></div>
            <span className="text-xs font-bold text-slate-400">Projected Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-slate-400 border-dashed rounded-full"></div>
            <span className="text-xs font-bold text-slate-400">Current Revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
