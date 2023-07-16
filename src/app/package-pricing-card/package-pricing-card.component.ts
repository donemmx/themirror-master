import { Component, Input } from '@angular/core';
import { CoursesService, LearnersService, PaymentService } from '../api/services';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { BaseComponent } from '../pages/base/base.component';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-package-pricing-card',
  templateUrl: './package-pricing-card.component.html',
  styleUrls: ['./package-pricing-card.component.css']
})
export class PackagePricingCardComponent extends BaseComponent {
  videoModal: boolean = false;
  loading: boolean = false;
  imageLoading: boolean = false;
  courseImage: any;
  @Input() price: any;
  @Input() image: any;
  @Input() package: any;
  exists: any;
  constructor(
    data: DataService,
    router: Router,
    public auth: AuthService,
    public api: CoursesService,
    private apiLearner:LearnersService,
    private paymenetApi: PaymentService,
    private notify: NotificationService
  ) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();

    // this.exists = this.alreadyPaid(this.course.courseId);

    let paid: any[] = []

    this.apiLearner.getLearnerPaidCourses().subscribe((res: any) =>
    {
    this.exists = res.find(({packageId}:any)  => packageId === this.package.packageId)
    }
    )


  }

  openVideo() {
    this.videoModal = !this.videoModal;
  }

  process(){
    if(this.package.pricePlan?.price == 0){
      this.enrollCourse()
    }
    else{
      this.addToCart()
    }
  }
  addToCart() {
    this.loading = true;
    const data = this.isInCart(this.package.packageId);
    if (data) {
      this.notify.warning('course already exists in cart');
      this.loading = false;
    } else {
      this.loading = false;
      this.message.cart = [...this.message.cart, this.message.packageSelected];
      this.data.changeMessage(this.message);
      this.notify.success('successfully added to cart');
    }
  }

  enrollCourse(){
    this.paymenetApi.registerPayment({
      payId: v4(),
        body: {
          courseIds: [this.package.courseIds],
          method: 'free'
        }
      })
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/my-learning');
        })
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  isInCart(selectedId: any) {
    return this.message.cart?.find(({ packageId }: any) => packageId === selectedId);
  }

  alreadyPaid(id: any) {
    let paid: any[] = []

     this.apiLearner.getLearnerPaidCourses().subscribe((res: any) => paid.push(...res)
     )

    return paid.find(({packageId}:any)  => packageId === id)


  }

  proceed() {
    this.router.navigateByUrl('/my-learning');
  }
}
