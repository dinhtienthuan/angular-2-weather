import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    console.log(form.value.location);
  }
}
