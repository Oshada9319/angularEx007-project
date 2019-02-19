import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
