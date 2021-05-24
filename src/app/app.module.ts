import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent, FaqPipe } from './faq/faq.component';
import { AskUsComponent } from './ask-us/ask-us.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent, SearchCategoryPipe } from './main/category/category.component';
import { SuggestionComponent } from './main/suggestion/suggestion.component';
import { ChatbotComponent } from './main/chatbot/chatbot.component';
import { ChatbotDataService } from './services/chatbot-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication-service.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './services/user-service.service';
import { FooterComponent } from './footer/footer.component';
import { AnswerHubComponent } from './answer-hub/answer-hub.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

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
    SearchCategoryPipe,
    FaqPipe,
    LoginComponent,
    AdminComponent,
    FooterComponent,
    AnswerHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ChatbotDataService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
