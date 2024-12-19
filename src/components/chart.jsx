import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer,  CartesianGrid, XAxis, YAxis } from 'recharts';

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { total, max } = this.props;
    const data = [
        { 
            total: total,
            max: max
        }
    ]
    return (
    <div style={{ width: '200px', height: '50vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <YAxis width={100} dataKey={"max"} tickCount={5} /> 
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
