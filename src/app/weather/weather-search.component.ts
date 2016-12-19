import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.location);
  }
}
