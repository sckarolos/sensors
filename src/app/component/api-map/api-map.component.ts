import { Component, OnInit } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service';
import { IApiTable } from '../../_model/i-api-table';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';

@Component({
  selector: 'app-api-map',
  templateUrl: './api-map.component.html',
  styleUrls: ['./api-map.component.css'],
  providers: [ApiTableService]
})
export class ApiMapComponent implements OnInit {
  dataSource;
  map: Map;
  mapOptions: MapOptions;

  markers = [];

  constructor(private _apiResponse: ApiTableService) { }

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(51.5254534,-0.0568385),
      zoom: 12,
      layers: [
        tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private addSampleMarker() {
    this._apiResponse.fetchData().subscribe
    ((response) => {
      this.dataSource = response;
      let key = 0;
      let lat = this.dataSource[key].latitude;
      let long = this.dataSource[key].longitude;
      if(this.dataSource.hasOwnProperty(key)) {
        const marker = new Marker([lat, long])
        .setIcon(
          icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker.png'
          }));
        marker.addTo(this.map).bindPopup('Sensor location', lat);        
      }
    });
  }

}
