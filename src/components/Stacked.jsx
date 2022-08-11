import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../data/dummy'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
        width={width}
        height={height}
        id="stack chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{  enable: true }}
        LegendSettings={{  background: 'white' }}
    >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
        { 
            stackedCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item}/>
         )
        }
          {/* <SeriesDirective dataSource={stackedChartData[0]} xName='x' yName='y' width={2} name='India' type='StackingColumn'></SeriesDirective>
          <SeriesDirective dataSource={stackedChartData[1]} xName='x' yName='y1' width={2} name='China' type='StackingColumn'></SeriesDirective>   */}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked