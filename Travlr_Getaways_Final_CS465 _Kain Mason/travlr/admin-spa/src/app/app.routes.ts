import { Routes } from '@angular/router';
import { TripListComponent } from './components/trip-list.component';
import { TripEditComponent } from './components/trip-edit.component';
export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'edit/:slug', component: TripEditComponent },
  { path: '**', redirectTo: '' }
];
