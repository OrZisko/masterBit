import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MastrbitAppComponent } from './pages/mastrbit-app/mastrbit-app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactResolver } from './services/contact-resolver.service.service';

const routes: Routes = [
  {path: 'statistics', component:StatisticsComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'contact/edit/:id', component: ContactEditComponent, resolve: {contact: ContactResolver}},
  {path: 'contact/edit', component: ContactEditComponent, resolve: {contact: ContactResolver}},
  {path: 'contact/:id', component: ContactDetailsComponent, resolve: {contact: ContactResolver}},
  {path: 'contact', component:ContactsComponent},
  {path: '', component:MastrbitAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
