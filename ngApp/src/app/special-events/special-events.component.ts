import { Component, inject } from '@angular/core';
import { EventService } from '../event.service';
import { DatePipe, NgFor } from '@angular/common';
import { Event } from '../../types';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss',
})
export class SpecialEventsComponent {
  eventService = inject(EventService);
  private _router = inject(Router);

  specialEvents: Event[] = [];

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe({
      next: (res) => (this.specialEvents = res),
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      },
    });
  }
}
