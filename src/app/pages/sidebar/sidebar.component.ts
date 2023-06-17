import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from 'src/app/services/auth.service';
import { LearnersService, NotificationService } from 'src/app/api/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent extends BaseComponent {
  totalNote: any = '';
  constructor(
    data: DataService,
    router: Router,
    private auth: AuthService,
    private api: LearnersService,
    private noteApi: NotificationService
  ) {
    super(data, router);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.noteApi.getAllNotifications().subscribe((res: any) => {
      this.totalNote = res.data.filter((res: any) => res.isSeen == false);
    });
  }

  logout() {
    this.api.logOutLearner().subscribe(() => {
      this.auth.logout();
      this.message.cart = [];
      this.message.courseSelected = null;
    });
  }
}
