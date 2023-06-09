import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { of } from 'rxjs';
import { LearnersService, NotificationService } from 'src/app/api/services';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends BaseComponent {
  @ViewChild('header') header: ElementRef;
  id: any = '';
  cartAmount: any
  platformId: Object;
  checked: boolean = false
  form: FormGroup;
  hide: boolean = true;
  visible: boolean = false;
  menu: boolean = false;
  cart: boolean = false;
  notification: boolean = false;
  categoryOpen = false;
  loading: boolean = false;
  subscrption: any;
  gender: any = ['male', 'female'];
  label: any
  totalNote: any = '';
  

  constructor(
    data: DataService,
    router: Router,
    public auth: AuthService,
    private api: LearnersService,
    private noteApi: NotificationService,
    
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder
  ) {
    super(data, router);
    this.platformId = platformId;
  }
  ngOnInit(): void {
    super.ngOnInit();

    if (this.message?.user == null) {
      const id: any = this.learnerAuth.getUserId();
      if(id !== null){
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
    this.form = this.formBuilder.group({
      mode: new FormControl(false),
    });

    this.noteApi.getAllNotifications().subscribe((res: any) => {
      this.totalNote = res.data.filter((res: any) => res.isSeen == false);
    });

    this.getDevice();
    this.cartAmount = this.message.cart?.length
    this.label = this.message.user?.name.split(' ')[0][0] 
  }

  loadTheme(theme: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.toggle('darkMode');
    }
  }

  getDevice() {
    if (Capacitor.isNativePlatform()) {
      this.hide = false;
    }
  }

  openMenu(){
    this.cart = false
    this.notification = false
    this.menu = !this.menu
  }

  openCart(){
    this.cart = !this.cart
    this.notification = false
    this.menu = false
  }

  openSidebar() {
    this.visible = !this.visible;
  }

  openCategory() {
    this.categoryOpen = !this.categoryOpen;
  }

  openNotification() {
    this.menu = false
    this.cart = false
    this.notification = !this.notification;
  }

  setCategory(item: string) {
    this.message.selected = item;
    this.data.changeMessage(this.message);
    this.router.navigateByUrl('/home');
    this.openCategory();
  }

  getModalValue(event: any){
      this.visible = event
  }
}
