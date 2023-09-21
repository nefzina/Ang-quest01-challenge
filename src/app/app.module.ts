import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  declarations: [AppComponent,
    BlockComponent,
    UserProfileComponent,
    SignupComponent,
    MenuComponent],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
