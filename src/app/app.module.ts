import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Provider, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { VideoComponent } from './pages/video/video.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { HeroComponent } from './component/hero/hero.component';
import { FooterComponent } from './component/footer/footer.component';
import { CourseCardComponent } from './component/course-card/course-card.component';
import { CardProgressComponent } from './component/card-progress/card-progress.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RippleModule} from 'primeng/ripple';
import { CourseSectionComponent } from './component/course-section/course-section.component';
import { DiversitySectionComponent } from './component/diversity-section/diversity-section.component';
import {CarouselModule} from 'primeng/carousel';
import { CarouselComponent } from './component/carousel/carousel.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {TabViewModule} from 'primeng/tabview';
import { ExploreComponent } from './component/explore/explore.component';
import { HeroTwoComponent } from './component/hero-two/hero-two.component';
import { HeroThreeComponent } from './component/hero-three/hero-three.component';
import { HeaderTwoComponent } from './component/header-two/header-two.component';
import { CourseContentComponent } from './component/course-content/course-content.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import {AccordionModule} from 'primeng/accordion';
import { PricingCardComponent } from './component/pricing-card/pricing-card.component';
import {TableModule} from 'primeng/table';
import { AdultHeroComponent } from './component/adult-hero/adult-hero.component';
import { ChildrenHeroComponent } from './component/children-hero/children-hero.component';
import { YoungHeroComponent } from './component/young-hero/young-hero.component';
import { BaseComponent } from './pages/base/base.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { ApiModule } from './api/api.module';
import { ModalComponent } from './modal/modal.component';
import { FooterAdultComponent } from './footer-adult/footer-adult.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { ChildHeroComponent } from './child-hero/child-hero.component';
import { AboutProgramComponent } from './about-program/about-program.component';
import { CourseHeroComponent } from './course-hero/course-hero.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChipModule } from 'primeng/chip';
import { KnobModule } from 'primeng/knob';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { AvatarModule } from 'primeng/avatar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LearningCardComponent } from './learning-card/learning-card.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioHeroComponent } from './portfolio-hero/portfolio-hero.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { IntakeAssesmentComponent } from './intake-assesment/intake-assesment.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { InputMaskModule } from 'primeng/inputmask';
import { BadgeModule } from 'primeng/badge';
import { CardPorgressComponent } from './card-porgress/card-porgress.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { VideoItemsComponent } from './video-items/video-items.component';
import { MessagesModule } from 'primeng/messages';
import { InfoComponent } from './info/info.component';
import { AssesmentCardComponent } from './assesment-card/assesment-card.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CourseBgComponent } from './course-bg/course-bg.component';
import { ParallaxDirective } from './parallax.directive';
import { LandingComponent } from './pages/landing/landing.component';
import { AnimationOneComponent } from './animation-one/animation-one.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { BlockUIModule } from 'primeng/blockui';
import { TextItemComponent } from './text-item/text-item.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { AssignmentItemComponent } from './assignment-item/assignment-item.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PdfItemComponent } from './pages/pdf-item/pdf-item.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NotifcationComponent } from './pages/notifcation/notifcation.component';
import { ChartModule } from 'primeng/chart';
import { PackagesSectionComponent } from './packages-section/packages-section.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => JwtInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoursesComponent,
    MyLearningComponent,
    VideoComponent,
    CourseDetailComponent,
    HeroComponent,
    FooterComponent,
    CourseCardComponent,
    CardProgressComponent,
    CourseSectionComponent,
    DiversitySectionComponent,
    CarouselComponent,
    RegistrationComponent,
    WelcomeComponent,
    ExploreComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeaderTwoComponent,
    CourseContentComponent,
    ReviewsComponent,
    PricingCardComponent,
    AdultHeroComponent,
    ChildrenHeroComponent,
    YoungHeroComponent,
    BaseComponent,
    ModalComponent,
    FooterAdultComponent,
    FooterTwoComponent,
    ChildHeroComponent,
    AboutProgramComponent,
    CourseHeroComponent,
    FooterBottomComponent,
    QuizComponent,
    VideoModalComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    OtpComponent,
    TopRatedComponent,
    RecommendedComponent,
    LearningCardComponent,
    MenuComponent,
    AccountComponent,
    ProfileComponent,
    PortfolioComponent,
    PortfolioHeroComponent,
    PortfolioCardComponent,
    CartComponent,
    CartMenuComponent,
    NotificationMenuComponent,
    IntakeAssesmentComponent,
    PaymentCardComponent,
    CardPorgressComponent,
    VideoFrameComponent,
    VideoItemsComponent,
    InfoComponent,
    AssesmentCardComponent,
    PublicProfileComponent,
    CourseImageComponent,
    CourseBgComponent,
    ParallaxDirective,
    LandingComponent,
    AnimationOneComponent,
    TextItemComponent,
    QuizItemComponent,
    AssignmentItemComponent,
    PdfItemComponent,
    SidebarComponent,
    PrivacyPolicyComponent,
    NotifcationComponent,
    PackagesSectionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ToggleButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    RippleModule,
    CarouselModule,
    CheckboxModule,
    InputSwitchModule,
    DropdownModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      progressAnimation: 'decreasing',
      progressBar: true
    }),
    TabViewModule,
    TableModule,
    ProgressBarModule,
    DialogModule,
    KnobModule,
    MultiSelectModule,
    SelectButtonModule,
    InputMaskModule,
    MessagesModule,
    AvatarModule,
    BadgeModule,
    CheckboxModule,
    ChipModule,
    TagModule,
    ChartModule,
    NgxPayPalModule,
    SkeletonModule,
    BlockUIModule,
    AccordionModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    JwtInterceptor,
    API_INTERCEPTOR_PROVIDER,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
