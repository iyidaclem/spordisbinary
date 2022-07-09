import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"team",component:TeamComponent},
{path:"contact",component:ContactComponent},
{path:"service",component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}