import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { AuthGuard } from './guards/auth.guard';

// routing configuration
const routes: Routes = [
  { path: '', component:  ConceptsComponent },
  { path: 'contacts', component:  ContactsComponent },
  { path: 'contacts/new', component:  AddContactComponent, canActivate: [AuthGuard] },
  { path: 'contacts/:id', component:  ContactDetailsComponent },
  { path: 'about', component:  AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
