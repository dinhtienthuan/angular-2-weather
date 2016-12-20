import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <h3>Saved Profiles</h3>
    <button (click)="onSaveNew()">Save List to Profile</button>
    <article class="profile">
      <h4>Profile Name</h4>
      <p>Cities: Danang, Hanoi, Ho Chi Minh City</p>
      <span class="delete" (click)="onDeleteProfile($event)">X</span>
    </article>
  `,
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
