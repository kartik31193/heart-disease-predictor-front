import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class PredictionService {
  private apiUrl = 'http://localhost:8080/api/predict';  // Update this with your backend URL

  constructor(private http: HttpClient) {}

  predictHeartDisease(inputData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inputData);
  }
}
