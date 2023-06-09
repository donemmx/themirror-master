import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { VideoComponent } from './pages/video/video.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { LoginGuard } from './services/login.guard';
import { AuthGuard } from './services/auth.guard';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { QuizComponent } from './quiz/quiz.component';
import { IntakeAssesmentComponent } from './intake-assesment/intake-assesment.component';
import { CartComponent } from './pages/cart/cart.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent ,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'reset-password', component: ResetPasswordComponent, 
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent 
  },
  {
    path: 'otp', component: OtpComponent 
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: 'course-detail/:id', component: CourseDetailComponent
  },
  {
    path: 'my-learning', component: MyLearningComponent, canActivate: [AuthGuard]
  },
  {
    path: 'my-account', component: AccountComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'public-profile', component: PublicProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'intake-assesment', component: IntakeAssesmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cart', component: CartComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'video/:id', component: VideoComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'registration', component: RegistrationComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'welcome', component: WelcomeComponent,  canActivate: [AuthGuard]
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: "enabled" 
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
