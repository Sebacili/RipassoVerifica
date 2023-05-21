import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoFeatureCollection } from './models/geojson.model';
import { Marker } from './models/marker.model';
import { Prova } from './models/prova.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-maps';
  // google maps zoom level
  zoom: number = 8;
  geoJsonObject: GeoFeatureCollection; //Oggetto che conterrà il vettore di GeoJson
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  markers: Marker[];  //Vettore con tutti i marker


  url: "https://5000-giuratofabr-ripassotecn-3bhm04d3h4a.ws-eu97.gitpod.io/noncapisconulla";

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    //features[0] seleziona il primo geoJson
    //coordinates[0] ottiene la lista di poligoni.
    //coordinates[0][0] ottiene il primo (e unico) poligono della lista
    //coordinates[0][0][0] ottiene la longitudine
    //coordinates[0][0][1] ottiene la latitudine
    /*this.markers = [
      {
        lng: this.geoJsonObject.features[0].geometry.coordinates[0][0][0],
        lat: this.geoJsonObject.features[0].geometry.coordinates[0][0][1],
        label: String(this.geoJsonObject.features[0].properties.id),
      },
      {
        lng: this.geoJsonObject.features[1].geometry.coordinates[0][0][0],
        lat: this.geoJsonObject.features[1].geometry.coordinates[0][0][1],
        label: String(this.geoJsonObject.features[1].properties.id),
      }
    ]*/

    //Uso di un ciclo foreach per riempire i marker
    this.markers = [];

// richiesta al server python
  //  this.http.get<GeoFeatureCollection>(this.url).subscribe(data => {
  //   for (let feature of data.features) {
  //      let lng = feature.geometry.coordinates[0][0][0];
  //     let lat = feature.geometry.coordinates[0][0][1];
  //     let id = String(feature.properties.id);
  //     let marker: Marker = new Marker(lat, lng, id);
  //    this.markers.push(marker);
  //  }
  //  })

    this.http.get<Prova[]>("https://5000-sebacili-ripassoverific-4lktztr0mj1.ws-eu97.gitpod.io/noncapisconulla").subscribe(data =>{
     for (let d of data) {
      let lng = d[0]
      let lat = d[1]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)
     }
    })

    //    this.http.get<Prova[]>(this.url).subscribe(data =>{
    //let lng = data[0][0]
    //let lat = data[0][1]

    //})
  }
}


