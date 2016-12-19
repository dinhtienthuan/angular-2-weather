import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  private weatherStream = new Subject<string>();
  data: any = {};

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherService.searchWeatherData(input))
      .subscribe(
        data => this.data = data
      );
  }

  onSubmit() {
    const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
    this.weatherService.addWeatherItem(weatherItem);
  }

  onSearchLocation(cityName) {
    this.weatherStream
      .next(cityName);
  }
}
