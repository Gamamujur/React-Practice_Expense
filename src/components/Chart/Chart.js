import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const datapointvalue = props.dataPoint.map(datapoints => datapoints.value)
    const maxpointvalue = Math.max(...datapointvalue)

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxpointvalue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
