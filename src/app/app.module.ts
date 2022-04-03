import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { MastrbitAppComponent } from './pages/mastrbit-app/mastrbit-app.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactsListComponent } from './cmps/contacts-list/contacts-list.component';
import { ContactsPreviewComponent } from './cmps/contacts-preview/contacts-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './cmps/filter/filter.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MastrbitAppComponent,
    StatisticsComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    FilterComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
