import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service';
import { IApiTable } from '../../_model/i-api-table';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css'],
  providers: [ApiTableService]
})

export class ApiTableComponent implements OnInit {

  ELEMENT_DATA = 
    this._apiResponse.fetchData().subscribe
  ((response) => {
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });

  dataSource = new MatTableDataSource();

  id: string;
  box_id: string; 
  sensor_type: string; 
  name: string; 
  range_l: number; 
  range_u: number; 
  longitude: number; 
  latitude: number; 
  reading: number; 
  unit: string; 
  reading_ts: string; 

  displayedColumns = ['name', 'id', 'sensor_type', 'unit', 'range_l', 'range_u', 'reading', 'reading_ts'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _apiResponse: ApiTableService) { }

  ngOnInit() {
  }

  onClick(row: any) {
    this.id = row.id;
    this.box_id = row.box_id; 
    this.sensor_type = row.sensor_type; 
    this.name = row.name; 
    this.range_l = row.range_l; 
    this.range_u = row.range_u; 
    this.longitude = row.longitude; 
    this.latitude = row.latitude; 
    this.reading = row.reading; 
    this.unit = row.unit; 
    this.reading_ts = row.reading_ts; 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}









