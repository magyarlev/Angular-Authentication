import { Component, inject } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  standalone: true,
  imports: [],
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss',
})
export class SpecialEventsComponent {
  eventService = inject(EventService);

  specialEvents = [];

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe({
      next: (res) => (this.specialEvents = res),
      error: (err) => console.log(err),
    });
  }
}
