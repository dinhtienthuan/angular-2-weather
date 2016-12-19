import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService {

  constructor() { }
  
  getWeatherItems(): WeatherItem[] {
    return WEATHER_ITEMS;
  }
}
