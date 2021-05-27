import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AAnswerComponent } from './admin/a-answer/a-answer.component';
import { AAskUsComponent } from './admin/a-ask-us/a-ask-us.component';
import { ACategoryComponent } from './admin/a-category/a-category.component';
import { AFaqComponent } from './admin/a-faq/a-faq.component';
import { AQuestionComponent } from './admin/a-question/a-question.component';
import { AUserComponent } from './admin/a-user/a-user.component';
import { AdminComponent } from './admin/admin.component';
import { AnswerHubComponent } from './answer-hub/answer-hub.component';
import { AskUsComponent } from './ask-us/ask-us.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'askus', component: AskUsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'answerhub', component: AnswerHubComponent, canActivate: [AuthGuard], data: {roles: ['Admin', 'Staff']}},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles: ['Admin']},
    children: [
      {path: 'category', component: ACategoryComponent},
      {path: 'question', component: AQuestionComponent},
      {path: 'answer', component: AAnswerComponent},
      {path: 'faq', component: AFaqComponent},
      {path: 'askus', component: AAskUsComponent},
      {path: 'user', component: AUserComponent}
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
