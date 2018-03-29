import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingAppModule } from './/routing-app.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RoutingAppModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
