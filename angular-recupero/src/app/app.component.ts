import { Component, OnInit } from '@angular/core';
import { Marker } from './models/marker.model';
import { HttpClient } from '@angular/common/http';
import { Prova } from './models/prova.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'verifica';
  // google maps zoom level
  zoom: number = 8;
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  markers!: Marker[];  //Vettore con tutti i marker
  markerOptions!: google.maps.MarkerOptions;
  center: any;
  url = "https://5000-sebacili-ripassoverific-tnl3zquv4ig.ws-eu98.gitpod.io/"
  accendi: boolean = false

  constructor(public http: HttpClient) {
    this.center = { lat: 35.689059944264514, lng:  139.754344334552 };

    let iconData: google.maps.Icon = {
      url: '/assets/img/hole.png',
      scaledSize: new google.maps.Size(60, 60)
    }
    this.markerOptions = { icon: iconData }

  }

  ngOnInit(): void {
    this.markers = [];

    this.http.get<Prova[]>(this.url + "all").subscribe(data => {
      console.log(data)
      for (let d of data) {
        let lng = d["lng"]
        let lat = d["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
      }
    })
  }

  //on off marker
  mostra() {
    this.accendi = !this.accendi
  }
    //richiesta http di una cordinata random
    mostrapikachu() {
      this.markers = [];
      this.http.get<Prova>(this.url + "pikachu").subscribe(data => {
        let lng = data["lng"]
        let lat = data["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
  
        //immagine
        let iconData: google.maps.Icon = {
          url: '/assets/img/pikachu.ico',
          scaledSize: new google.maps.Size(60, 60)
        }
        this.markerOptions = { icon: iconData }
      })
    }
  
    mostrabulbasaur() {
      this.markers = [];
      this.http.get<Prova>(this.url + "bulbasaur").subscribe(data => {
        let lng = data["lng"]
        let lat = data["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
  
        let iconData: google.maps.Icon = {
          url: 'assets/img/bulbasaur.ico',
          scaledSize: new google.maps.Size(60, 60)
        }
        this.markerOptions = { icon: iconData }
      })
    }
  
    mostracharmender() {
      this.markers = [];
      this.http.get<Prova>(this.url + "charmender").subscribe(data => {
        let lng = data["lng"]
        let lat = data["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
  
        let iconData: google.maps.Icon = {
          url: '/assets/img/charmender.ico',
          scaledSize: new google.maps.Size(60, 60)
        }
        this.markerOptions = { icon: iconData }
      })
    }
  
    mostrasnorlax() {
      this.markers = [];
      this.http.get<Prova>(this.url + "snorlax").subscribe(data => {
        let lng = data["lng"]
        let lat = data["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
  
        let iconData: google.maps.Icon = {
          url: '/assets/img/snorlax.ico',
          scaledSize: new google.maps.Size(60, 60)
        }
        this.markerOptions = { icon: iconData }
      })
    }
  
}


