import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { FirstProjectComponent } from './first-project/first-project.component';


@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
         NavbarComponent,
         ContactComponent,
         TeamComponent,
         HomeComponent,
         FirstProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
