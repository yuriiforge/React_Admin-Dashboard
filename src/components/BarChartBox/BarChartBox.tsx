import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import './barChartBox.scss';

interface Props {
  title: string;
  chartData: object[];
  dataColor: string;
  dataKey: string;
}

const BarChartBox = ({ title, chartData, dataKey, dataColor }: Props) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={dataKey} fill={dataColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
