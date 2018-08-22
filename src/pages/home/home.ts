import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import{Storage}from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
weather:any;
humidity:number;
main:string;
date:number;
Temp:number;
city:string;
windspeed:number;
wind:number;
description:number;
id:number;
icon:string;
location:string
temp_max:number;
temp_min:number;
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider,private storage:Storage,public navParams:NavParams) {
  }
    getWeather(cvalue:any){
   this.weatherProvider.getWeather(this.city).subscribe(results=>{
    this.weather=results;
    this.main=this.weather.weather[0].main;
    this.humidity=this.weather.main.humidity;
    this.Temp=this.weather.main.temp;
    this.date=this.weather.dt;
    this.wind=this.weather.wind.speed;
    this.description=this.weather.weather[0].description;
    this.id=this.weather.weather[0].id;
    this.location=this.weather.weather[0].city
    this.temp_max=this.weather.main.temp_max;
    this.temp_min=this.weather.main.temp_min;
    console.log("response",results)
   });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
   }
  }
 

