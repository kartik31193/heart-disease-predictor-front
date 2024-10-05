import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PredictionService } from '../prediction.service';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import { MatCard } from '@angular/material/card';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-prediction-form',
  standalone:false,
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.scss'],
})
export class PredictionFormComponent implements OnInit {
  predictionForm!: FormGroup;
  predictionResult: any | null = null;

  constructor(private fb: FormBuilder, private predictionService: PredictionService,private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.predictionForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(1)]],
      sex: ['', Validators.required],
      cholesterol: ['', Validators.required],
      restingBP: ['', Validators.required],
      maxHeartRate: ['', Validators.required]
      // Add validators for other fields
    });
    
  }

  onSubmit() {
    if (this.predictionForm.valid) {
      this.predictionService.predictHeartDisease(this.predictionForm.value)
        .subscribe((response) => {
          this.predictionResult = response.prediction;
          this.cdr.detectChanges();
        }, (error) => {
          console.error('Prediction error', error);
        });
    }
  }
}
