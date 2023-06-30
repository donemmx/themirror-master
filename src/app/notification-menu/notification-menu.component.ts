import { Component, Input, OnInit, inject } from '@angular/core';
import { NotificationService } from '../api/services';
import { Observable, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.css'],
})
export class NotificationMenuComponent implements OnInit {
  api = inject(NotificationService);
  open: boolean = false;
  totalNote = '';
  notifications$: Observable<any>;
  @Input() hide: boolean = false;
  ngOnInit(): void {
    this.api.getAllNotifications().subscribe((res: any) => {
      this.notifications$ = of(res.data.filter((res: any) => res.isSeen == false).slice(0,5))
      this.totalNote = res.data.filter((res: any) => res.isSeen == false)
    });
  }

  hideMenu() {
    this.hide = false;
  }

  leave() {
    this.open = !this.open;
  }
}
