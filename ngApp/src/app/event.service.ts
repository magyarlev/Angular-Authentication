import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);

  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
