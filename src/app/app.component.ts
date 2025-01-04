import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [WeatherComponent, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-tracker';
}
