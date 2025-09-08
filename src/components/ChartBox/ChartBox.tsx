import { Link } from 'react-router-dom';
import './chartBox.scss';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';

interface Props {
  icon: string;
  title: string;
  dataAmount: number | string;
  chartData: object[];
  dataColor: string;
  dataKey: string;
  percentage: number;
}

const ChartBox = ({
  icon,
  title,
  dataAmount,
  chartData,
  dataColor,
  dataKey,
  percentage,
}: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{dataAmount}</h1>
        <Link to="/" style={{ color: dataColor }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 65 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={dataColor}
                activeDot={{ r: 8 }}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
