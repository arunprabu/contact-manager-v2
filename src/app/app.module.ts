import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SiComponent } from './components/concepts/data-binding/si/si.component';
import { PbComponent } from './components/concepts/data-binding/pb/pb.component';
import { CpbComponent } from './components/concepts/data-binding/cpb/cpb.component';
import { EbComponent } from './components/concepts/data-binding/eb/eb.component';
import { CebComponent } from './components/concepts/data-binding/ceb/ceb.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { TwbComponent } from './components/concepts/data-binding/twb/twb.component';
import { StructuralDirectivesComponent } from './components/concepts/structural-directives/structural-directives.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavComponent,
    SiComponent,
    PbComponent,
    CpbComponent,
    EbComponent,
    CebComponent,
    ConceptsComponent,
    TwbComponent,
    StructuralDirectivesComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
