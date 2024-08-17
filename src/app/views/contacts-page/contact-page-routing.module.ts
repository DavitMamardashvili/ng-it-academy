import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FormContainerComponent } from './contacts/components/form-container/form-container.component';
import { InfoDetailsComponent } from './contacts/components/info-details/info-details.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      { path: 'form', component: FormContainerComponent },
      { path: 'info', component: InfoDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }
