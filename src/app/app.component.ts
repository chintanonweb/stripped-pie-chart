import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stripped-pie-chart';
  chartData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

  chartOption: EChartsOption = {
    legend: {
      orient: 'vertical',
      right: 200,
      top: 'center',
      data: [
        {
          name: 'Legend A',
          icon: 'rect'
        },
        {
          name: 'Legend B',
          icon: 'circle'
        },
        {
          name: 'Legend C',
          icon: 'pin'
        }
      ]
    },
    angleAxis: {
      show: false,
      min: 0,
      max: 100
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: this.chartData,
    },
    polar: {
      radius: ['10%', '80%']
    },
    series: [
      {
        name: 'Legend A',
        type: 'bar',
        data: [30, 40, 50, 60, 70, 80, 30, 40, 50],
        colorBy: 'data',
        roundCap: true,
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        },
        label: {
          show: true,
          // Try changing it to 'insideStart'
          position: 'start',
          formatter: '{b}'
        },
        //barWidth: '50%',
        // itemStyle: {
        //   normal: {
        //     //color: '#ddd'
        //   }
        // },
        silent: true,
        barWidth: 10,
  
        coordinateSystem: 'polar',
        barGap: '-10%'
      }
    ]
  }
}
