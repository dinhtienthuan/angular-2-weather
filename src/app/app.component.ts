import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Angular 2 Weather</h1>
    </header>
    <app-sidebar></app-sidebar>
    <app-weather-search></app-weather-search>
    <app-weather-list></app-weather-list>
  `
})
export class AppComponent {
}
