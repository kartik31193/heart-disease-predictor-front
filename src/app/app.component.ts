import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,AppModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'heart-disease-predictor';
}
