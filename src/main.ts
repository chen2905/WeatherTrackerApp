import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { provideHttpClient } from '@angular/common/http';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from './environments/environment';


const appInsights = new ApplicationInsights({
  config:{
    instrumentationKey:environment.insightInstrumentationKey
  },

});

appInsights.loadAppInsights();
appInsights.trackPageView();



bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Provide HttpClient globally
});
