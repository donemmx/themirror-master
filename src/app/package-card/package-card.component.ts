import { Component, Input } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { CoursesService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent extends BaseComponent {
  @Input() package: any;
  pacakageLoading: boolean = false;

  constructor(data: DataService, router: Router, private api: CoursesService) {
    super(data, router);
  }
  ngOnInit(): void {
    super.ngOnInit();
  }

  selectCourse() {
    this.message.packageSelected = this.package;
    this.data.changeMessage(this.message);
  }


}