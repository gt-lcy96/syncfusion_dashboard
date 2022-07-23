import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      valueType="Numeric"
      lineWidth={1}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : ${yval}',
        trackLineSettings: {
            visible: true,
            color: {color},
            width: 2
          }
      }}
      >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
