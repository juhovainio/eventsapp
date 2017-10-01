import { Component } from '@angular/core';

const EVENTS: Event[] = [
  { id: 1, title: 'New Years party!', start: '31.12.2017', end: '1.1.2018', location: 'Turku, Finland', url: 'http://turku.fi' },
  { id: 2, title: 'Garden Hose party!', start: '31.12.2017', end: '1.1.2018', location: 'Turku, Finland', url: 'http://turku.fi' },
  { id: 3, title: 'BeerFest 2018', start: '31.12.2017', end: '1.1.2018', location: 'Turku, Finland', url: 'http://turku.fi' }
];

export class Event {
  id: number;
  title: string;
  start: string;
  end: string;
  location: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Events App';
  events = EVENTS;
}

