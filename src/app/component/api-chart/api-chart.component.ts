import { Component, Inject, NgZone, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiTableService } from '../../_service/api-table.service';
import { IApiTable } from '../../_model/i-api-table';
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-api-chart',
  templateUrl: './api-chart.component.html',
  styleUrls: ['./api-chart.component.css'],
  providers: [ApiTableService]
})
export class ApiChartComponent implements OnInit {
  dataSource;
  private chart: am4charts.XYChart;

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      const ELEMENT_DATA = 
      this._apiResponse.fetchData().subscribe
        ((response) => {
          this.dataSource = response;
          chart.data = response;
        });
  
      // Create chart
      chart.paddingRight = 20;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.baseInterval = {
        "timeUnit": "minute",
        "count": 1
      };
      dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.title.text = "Unique visitors";

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "reading_ts";
      series.dataFields.valueY = "reading";
      series.tooltipText = "reading: [bold]{valueY}[/]";
      series.fillOpacity = 0.3;


      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.opacity = 0;
      chart.scrollbarX = new am4charts.XYChartScrollbar();

      dateAxis.start = 0.8;
      dateAxis.keepSelection = true;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private _apiResponse: ApiTableService) {}

  ngOnInit(): void {
  }

}
