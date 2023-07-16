import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../api/services';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent extends BaseComponent{
  packages$: Observable<any>
  loading: boolean = true
  courseCategory = new BehaviorSubject('identity');
  courseCategories = ['identity', 'education', 'social', 'spiritual','mentoring' ]
  selectedCategory:any  = 'identity'
  constructor(data:DataService, router: Router, private api: CoursesService, private auth: AuthService){
    super(data, router)
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.courseCategory.subscribe((res: any) => {
      this.packages$ = this.api
        .getAllCoursePackages({
          ageCategory: this.message.selected,
          courseCategory: res
        })
        .pipe(
          map((res) => res.data),
          tap((res) => {
            this.loading = false;
          })
        );
    });

  }


  changeCategory(event:any){
    this.courseCategory.next(event.value)
  }
}
