import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import './single.scss';

interface Props {
  id?: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}

const Single = ({ img, title, info, chart, activities }: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {activities && (
          <ul>
            {activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
