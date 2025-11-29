import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', Subscribers: 14000, FreeUser: 12500 },
  { name: 'Feb', Subscribers: 17000, FreeUser: 12000 },
  { name: 'Mar', Subscribers: 6000, FreeUser: 23000 },
  { name: 'Apr', Subscribers: 16000, FreeUser: 6000 },
  { name: 'May', Subscribers: 12000, FreeUser: 11000 },
  { name: 'Jun', Subscribers: 17000, FreeUser: 13500 },
  { name: 'Jul', Subscribers: 21000, FreeUser: 11000 },
  { name: 'Aug', Subscribers: 18000, FreeUser: 14000 },
  { name: 'Sep', Subscribers: 15000, FreeUser: 16000 },
  { name: 'Oct', Subscribers: 19000, FreeUser: 12000 },
  { name: 'Nov', Subscribers: 22000, FreeUser: 9000 },
  { name: 'Dec', Subscribers: 24000, FreeUser: 8000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
        <p className="font-bold text-gray-900 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function UserInsightsChart() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-6 shadow-sm w-full h-[400px]">
      <h2 className="text-xl font-bold text-gray-900 mb-6">User Insights</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -20,
            bottom: 20,
          }}
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 600 }}
            dy={10}
            interval={0} 
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 11, fontWeight: 600 }}
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, 25000]}
            ticks={[0, 5000, 10000, 15000, 20000, 25000]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Legend 
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '10px', fontSize: '12px' }}
            formatter={(value) => <span className="text-gray-700 font-semibold ml-2">{value === 'FreeUser' ? 'Free User' : value}</span>}
          />
          <Bar 
            dataKey="Subscribers" 
            fill="#0095FF" 
            radius={[4, 4, 0, 0]} 
            maxBarSize={40}
          />
          <Bar 
            dataKey="FreeUser" 
            fill="#34D399" 
            radius={[4, 4, 0, 0]} 
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserInsightsChart;
