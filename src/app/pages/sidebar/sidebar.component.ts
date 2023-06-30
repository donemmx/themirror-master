import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { LearnersService, NotificationService } from 'src/app/api/services';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent extends BaseComponent {
  totalNote: any = '';
  platformId: Object;
  checked: boolean = false;
  label: any;
  form: FormGroup;
  @Input() visible: boolean;
  @Output() modal = new EventEmitter()
  cartAmount: any;
  constructor(
    data: DataService,
    router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    public auth: AuthService,
    private api: LearnersService,
    private noteApi: NotificationService
  ) {
    super(data, router);
    this.platformId = platformId;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.cartAmount = this.message.cart?.length;
    this.label = this.message.user?.name.split(' ')[0][0];
    this.noteApi.getAllNotifications().subscribe((res: any) => {
      this.totalNote = res.data.filter((res: any) => res.isSeen == false);
    });

    this.form = this.formBuilder.group({
      mode: new FormControl(false),
    });
  }

  logout() {
    this.api.logOutLearner().subscribe(() => {
      this.auth.logout();
      this.message.cart = [];
      this.message.courseSelected = null;
    });
  }

  loadTheme(theme: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.toggle('darkMode');
    }
  }

  setCategory(item: string) {
    this.message.selected = item;
    this.data.changeMessage(this.message);
    this.router.navigateByUrl('/home');
  }

  closeModal(){
    this.visible = false
    this.modal.emit(this.visible)
  }
}
