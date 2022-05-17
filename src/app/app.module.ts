import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoooterComponent } from './foooter/foooter.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { ImgurlPipe } from './imgurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoooterComponent,
    MainContainerComponent,
    UserListComponent,
    UserComponent,
    HighlightDirective,
    ImgurlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
