import 'rxjs/Rx';

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }
  
  getWeatherItems(): WeatherItem[] {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=356eb9cac54b600c4c1a2a63591af383&units=metric')
      .map((response: Response) => response.json())
      .catch(error => {
        console.error(error.json());
        return Observable.throw(error.json());
      });
  }
}
