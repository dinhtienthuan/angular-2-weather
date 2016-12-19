import { Component, OnInit } from '@angular/core';

import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html'
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
