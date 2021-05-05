import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { AskUsComponent } from './ask-us/ask-us.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './main/category/category.component';
import { SuggestionComponent } from './main/suggestion/suggestion.component';
import { ChatbotComponent } from './main/chatbot/chatbot.component';

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
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
