import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../models/trip';
import { TripCardComponent } from './trip-card.component';
@Component({
  standalone: true,
  selector: 'app-trip-list',
  imports: [CommonModule, FormsModule, RouterLink, TripCardComponent],
  templateUrl: './trip-list.component.html'
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  newTrip: Partial<Trip> = { duration: 1, price: 0 };
  constructor(private svc: TripService) {}
  ngOnInit(){ this.refresh(); }
  refresh(){ this.svc.list().subscribe(t => this.trips = t); }
  add(){
    if(!this.newTrip.slug || !this.newTrip.name || !this.newTrip.location) return;
    this.svc.create(this.newTrip as Trip).subscribe(()=>{ this.newTrip = { duration:1, price:0 }; this.refresh(); });
  }
}
