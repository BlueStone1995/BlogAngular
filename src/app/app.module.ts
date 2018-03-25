import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {PostListItemComponentComponent} from './post-list-item-component/post-list-item-component.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
