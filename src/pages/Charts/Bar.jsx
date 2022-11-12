import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  Category,
  DataEditing,
  Tooltip,
  DataLabel
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../context/ContextProvider';

import { Header } from '../../components';
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}>
          <Inject
            services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, DataEditing]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
