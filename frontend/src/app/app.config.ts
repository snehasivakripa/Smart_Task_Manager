import { ApplicationConfig,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module'; 

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),

    provideAnimations(),
    importProvidersFrom(BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule ),
    provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
