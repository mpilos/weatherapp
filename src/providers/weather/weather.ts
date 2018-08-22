import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {

url='http://api.openweathermap.org/data/2.5/weather?q=';
appid='&&appid=bcdde2a9eff8d025727b570700acc4fb';


  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }
getWeather(city:string){
return this.http.get(this.url+''+city+',za'+this.appid+'')
.map(res => res.json());

}
}