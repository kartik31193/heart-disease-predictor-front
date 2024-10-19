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

  constructor(private fb: FormBuilder,private predictionService: PredictionService,private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    console.log('Form Initialized');
    this.predictionForm = this.fb.group({
      // 1. Age
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
    
      // 2. Sex (1 = Male, 0 = Female)
      sex: ['', Validators.required],
    
      // 3. Chest Pain Type (values: 1 = Typical Angina, 2 = Atypical Angina, 3 = Non-Anginal Pain, 4 = Asymptomatic)
      chestPainType: ['', Validators.required],
    
      // 4. Resting Blood Pressure (in mm Hg on admission to the hospital)
      restingBP: ['', [Validators.required, Validators.min(0)]],
    
      // 5. Cholesterol (serum cholesterol in mg/dl)
      cholesterol: ['', [Validators.required, Validators.min(0)]],
    
      // 6. Fasting Blood Sugar (1 = True if > 120 mg/dl, 0 = False)
      fastingBloodSugar: ['', Validators.required],
    
      // 7. Resting Electrocardiographic Results (values: 0 = Normal, 1 = Having ST-T wave abnormality, 2 = Showing probable/definite left ventricular hypertrophy)
      restingECG: ['', Validators.required],
    
      // 8. Maximum Heart Rate Achieved
      maxHeartRate: ['', [Validators.required, Validators.min(0)]],
    
      // 9. Exercise-Induced Angina (1 = Yes, 0 = No)
      exerciseInducedAngina: ['', Validators.required],
    
      // 10. Oldpeak (ST depression induced by exercise relative to rest)
      stDepression: ['', [Validators.required, Validators.min(0)]],
    
      // 11. Slope of the Peak Exercise ST Segment (values: 1 = Upsloping, 2 = Flat, 3 = Downsloping)
      stSlope: ['', Validators.required],
    
      // 12. Number of Major Vessels Colored by Fluoroscopy (0-3)
      numMajorVessels: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
    
      // 13. Thalassemia (3 = Normal, 6 = Fixed Defect, 7 = Reversible Defect)
      thalassemia: ['', Validators.required]
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
