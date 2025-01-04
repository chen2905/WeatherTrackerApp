import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.openWeatherMapApiKey;  // Ensure this key is in the environment file
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';  // Direct OpenWeatherMap API URL

  constructor(private http: HttpClient) {}

  // Fetch weather data for a specific city
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
