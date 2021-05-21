import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
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
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
