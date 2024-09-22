import { Routes } from '@angular/router';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';

export const routes: Routes = [
    { path: 'predict', component: PredictionFormComponent },
  { path: '', redirectTo: '/predict', pathMatch: 'full' }
];
