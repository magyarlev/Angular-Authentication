import { Component, inject } from '@angular/core';
import { EventService } from '../event.service';
import { DatePipe, NgFor } from '@angular/common';
import { Event } from '../../types';

@Component({
  selector: 'app-special-events',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss',
})
export class SpecialEventsComponent {
  eventService = inject(EventService);

  specialEvents: Event[] = [];

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe({
      next: (res) => (this.specialEvents = res),
      error: (err) => console.log(err),
    });
  }
}
