import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import { Component } from 'react';

highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
highchartsAccessibility(Highcharts);

export default class Statistics extends Component<
  Record<string, never>,
  Record<string, unknown>
> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            render: function () {
              const btn = document.querySelector(
                '.highcharts-a11y-proxy-button.highcharts-no-tooltip',
              ) as HTMLElement;
              if (btn && !btn.title)
                btn.title =
                  Highcharts.getOptions().lang?.contextButtonTitle ??
                  'Chart context menu';
            },
          },
        },
        exporting: {
          buttons: {
            contextButton: {
              symbol: 'menuball',
              y: -2,
              menuItems: [
                'printChart',
                'separator',
                'downloadJPEG',
                'downloadPDF',
                'downloadCSV',
              ],
            },
          },
        },
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  }

  render() {
    return (
      <HighchartsReact highcharts={Highcharts} options={this.state.options} />
    );
  }
}
