import { listAnimation } from 'src/app/app.animation';
import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/api/services';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../pages/base/base.component';

@Component({
  selector: 'app-packages-section',
  templateUrl: './packages-section.component.html',
  styleUrls: ['./packages-section.component.css']
})
export class PackagesSectionComponent extends BaseComponent {
  @Input() bg: boolean = false;
  loading: boolean = true
  packages$: Observable<any>
   constructor(data: DataService, router: Router, private api: CoursesService, public auth: AuthService) {
    super(data, router)
  }
}
