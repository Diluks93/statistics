import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';

highchartsAccessibility(Highcharts);

export const Chart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: `The number of ${props.owner} commits over the last year`,
    },
    series: [
      {
        type: 'line',
        data: props.data,
        name: 'Quantity commits',
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};
