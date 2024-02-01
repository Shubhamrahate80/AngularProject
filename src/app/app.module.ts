import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './c/home/home.component';
import { ProjectComponent } from './c/project/project.component';
import { AboutComponent } from './c/about/about.component';
import { CertificateComponent } from './c/certificate/certificate.component';
import { ContactComponent } from './c/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    CertificateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
