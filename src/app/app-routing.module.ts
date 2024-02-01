import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './c/certificate/certificate.component';
import { AboutComponent } from './c/about/about.component';
import { ProjectComponent } from './c/project/project.component';
import { ContactComponent } from './c/contact/contact.component';
import { HomeComponent } from './c/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent},
  {path:'about',component:AboutComponent},
  {path:'certificate',component:CertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
