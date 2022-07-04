import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './store/reducers/app.reducer';
import {HttpClientModule} from '@angular/common/http';
import { BooksListComponent } from './components/books-list/books-list.component';
import {MatButtonModule} from '@angular/material/button';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EffectsModule} from '@ngrx/effects';
import {BooksEffects} from './store/effects/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([BooksEffects]),
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
