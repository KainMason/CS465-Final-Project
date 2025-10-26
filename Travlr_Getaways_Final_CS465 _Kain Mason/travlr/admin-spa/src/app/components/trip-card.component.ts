import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Trip } from '../models/trip';
import { TripService } from '../services/trip.service';
@Component({
  standalone: true,
  selector: 'app-trip-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.component.html'
})
export class TripCardComponent {
  @Input() trip!: Trip;
  deleting = false;
  constructor(private svc: TripService) {}
  remove(){
    if(!confirm(`Delete ${this.trip.name}?`)) return;
    this.deleting = true;
    this.svc.remove(this.trip.slug).subscribe(()=>{ location.reload(); });
  }
}
