import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TripService } from '../services/trip.service';
@Component({
  standalone: true,
  selector: 'app-trip-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trip-edit.component.html'
})
export class TripEditComponent implements OnInit {
  slug = '';
  form = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    duration: [1, [Validators.required, Validators.min(1)]],
    price: [0, [Validators.required, Validators.min(0)]],
    image: [''],
    summary: [''],
    description: ['']
  });
  loading = true;
  saving = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private svc: TripService) {}
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.svc.get(this.slug).subscribe(trip => {
      this.form.patchValue(trip as any);
      this.loading = false;
    });
  }
  save(){
    if(this.form.invalid) return;
    this.saving = true;
    this.svc.update(this.slug, this.form.value).subscribe(()=>{ this.router.navigateByUrl('/'); });
  }
}
