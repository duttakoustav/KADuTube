import { SearchResultComponent } from './you-tube-search/search-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import { SearchBoxComponent } from './you-tube-search/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
