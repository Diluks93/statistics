import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import { useTheme } from 'styled-components';

highchartsAccessibility(Highcharts);

export const Chart = (props: HighchartsReact.Props) => {
  const theme = useTheme();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = {
    chart: {
      plotBackgroundColor: theme.colors.background,
      plotBorderWidth: theme.colors.background,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: `Small statics about repo ${props.owner}`,
      align: 'center',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Values',
        colorByPoint: true,
        data: props.data,
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
