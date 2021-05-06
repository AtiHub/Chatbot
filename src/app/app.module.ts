import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { AskUsComponent } from './ask-us/ask-us.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent, SearchCategoryPipe } from './main/category/category.component';
import { SuggestionComponent } from './main/suggestion/suggestion.component';
import { ChatbotComponent } from './main/chatbot/chatbot.component';
import { ChatbotDataService } from './chatbot-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FaqComponent,
    AskUsComponent,
    AboutComponent,
    CategoryComponent,
    SuggestionComponent,
    ChatbotComponent,
    SearchCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChatbotDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
