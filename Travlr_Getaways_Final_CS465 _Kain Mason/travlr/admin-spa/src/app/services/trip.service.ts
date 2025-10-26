import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
const API = 'http://localhost:3000/api/trips';
@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) {}
  list(): Observable<Trip[]> { return this.http.get<Trip[]>(API); }
  get(slug: string): Observable<Trip> { return this.http.get<Trip>(`${API}/${slug}`); }
  create(trip: Trip): Observable<Trip> { return this.http.post<Trip>(API, trip); }
  update(slug: string, updates: Partial<Trip>): Observable<Trip> { return this.http.put<Trip>(`${API}/${slug}`, updates); }
  remove(slug: string): Observable<void> { return this.http.delete<void>(`${API}/${slug}`); }
}
