import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importing CommonModule for common Angular directives
import { ContactsComponent } from './contacts/contacts.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormContainerComponent } from './contacts/components/form-container/form-container.component';
import { InfoDetailsComponent } from './contacts/components/info-details/info-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContactsComponent,
    FormContainerComponent,
    InfoDetailsComponent
  ],
  imports: [
    ContactPageRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule

  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsPageModule { }
