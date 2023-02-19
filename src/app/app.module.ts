import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordValidatorComponent } from './components/password-validator/password-validator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PasswordValidatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
