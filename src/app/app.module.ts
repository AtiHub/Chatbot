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
import { ACategoryComponent } from './admin/a-category/a-category.component';
import { AQuestionComponent } from './admin/a-question/a-question.component';
import { AAnswerComponent } from './admin/a-answer/a-answer.component';
import { AAskUsComponent } from './admin/a-ask-us/a-ask-us.component';
import { AFaqComponent } from './admin/a-faq/a-faq.component';
import { AUserComponent } from './admin/a-user/a-user.component';
import { AdminService } from './services/admin.service';

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
    AnswerHubComponent,
    ACategoryComponent,
    AQuestionComponent,
    AAnswerComponent,
    AAskUsComponent,
    AFaqComponent,
    AUserComponent
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
    UserService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
