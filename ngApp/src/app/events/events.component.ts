import { Component, inject } from '@angular/core';
import { EventService } from '../event.service';
import { DatePipe, NgFor } from '@angular/common';
import { Event } from '../../types';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  eventService = inject(EventService);

  events: Event[] = [];

  ngOnInit() {
    this.eventService.getEvents().subscribe({
      next: (res) => (this.events = res),
      error: (err) => console.log(err),
    });
  }
}
