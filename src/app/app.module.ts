import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';

@NgModule({
  declarations: [
    PredictionFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,      // Required for reactive forms
    HttpClientModule,

    // Angular Material Imports
    MatCardModule,            // Mat-Card module
    MatFormFieldModule,       // Mat-Form-Field module
    MatInputModule,           // Mat-Input module
    MatButtonModule,          // Mat-Button module
    MatSelectModule           // Mat-Select module (dropdowns)
  ],
  providers: [],
  bootstrap: [PredictionFormComponent]
})
export class AppModule { }
