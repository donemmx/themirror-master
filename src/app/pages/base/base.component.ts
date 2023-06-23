import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, of, shareReplay } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LearnersService } from 'src/app/api/services';
declare const PaystackPop: any;

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit, OnDestroy {
  message: { [k: string]: any } = {};
  subscrption: Subscription = new Subscription();
  category$: Observable<any>;
  learnerId: any;
  learnerApi = inject(LearnersService);
  learnerAuth = inject(AuthService);
  constructor(public data: DataService, public router: Router) {}

  ngOnInit(): void {
    this.subscrption = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
      this.data.currentMessage.subscribe((res: any) => {
      this.category$ = of(res);
      if (res.user == null) {
        const id: any = this.learnerAuth.getUserId();
        if(id){
          this.learnerApi
            .getLearner({
              learnerId: id.jti,
            })
            .subscribe((data) => {
              this.message.user = data;
              this.message.cart = [];
              this.data.changeMessage(this.message);
            });
        }
        }
    });
  }

  ngOnDestroy(): void {
    this.subscrption.unsubscribe();
  }

  statusSet(status: any) {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'inactive':
      case 'deactivated':
        return 'danger';
      default:
        return 'success';
    }
  }

  resetUpdate() {
    this.message.update = null;
    this.data.changeMessage(this.message);
  }

  getLearnerProfile(api: any) {
    api
      .getLearner({
        learnerId: this.learnerId,
      })
      .pipe(shareReplay(1))
      .subscribe((res: any) => {
        this.message.user = res;
        this.data.changeMessage(this.message);
      });
  }

  getUser(api: any, auth: any) {
    const id: any = auth.getUserId();
    api.getLearner({ learnerId: id.jti }).subscribe((res: any) => {
      this.message.user = res;
      this.data.changeMessage(this.message);
    });
  }

  payWithPaystack(payload: any, api: any) {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: payload.key,
      email: payload.email,
      amount: payload.amount,
      ref: payload.reference,
      onSuccess: (transaction: any) => {
        console.log(transaction);
        api
          .paystackCallback({ paystackId: payload.reference })
          .subscribe(() => {});
      },
      onCancel: () => {
        // user closed popup
      },
    });
  }
  updateCourseProgress(
    api: any,
    courseId: any,
    chapterId: any,
    chapterItemId: any
  ): Observable<any> {
    return api.addCourseProgress({
      body: {
        courseId: courseId,
        chapterId: chapterId,
        chapterItemId: chapterItemId,
      },
    });
  }
}
