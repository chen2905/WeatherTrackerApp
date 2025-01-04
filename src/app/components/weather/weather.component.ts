import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { FormsModule } from '@angular/forms';  // Import FormsModule
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,FormsModule],  // Import CommonModule
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  city: string = '';           // Store city input
  weatherData: any;            // Store weather data
  errorMessage: string = '';   // Store error message
  isLoading: boolean = false;  // Loading state

  constructor(private weatherService: WeatherService) {}

  // Fetch weather data when the user submits a city name
  getWeather() {
    this.errorMessage = '';
    this.isLoading = true;

    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to fetch weather data. Please try again.';
          this.isLoading = false;
        }
      );
    } else {
      this.errorMessage = 'Please enter a city name.';
      this.isLoading = false;
    }
  }
}
