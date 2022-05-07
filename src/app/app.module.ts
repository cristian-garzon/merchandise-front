import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ListMerchandiseComponent } from './pages/merchandise/components/list-merchandise/list-merchandise.component';
import {TableModule} from "primeng/table";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";                  //api
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    ListMerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    ConfirmDialogModule,
    InputNumberModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
