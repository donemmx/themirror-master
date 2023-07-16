import { CoursesService } from './../api/services/courses.service';
import { Component } from '@angular/core';
import { BaseComponent } from '../pages/base/base.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent extends BaseComponent {
  allCourses:any = []
  constructor(data: DataService, router: Router, private api: CoursesService){
    super(data, router)
  }
  ngOnInit(): void {
      super.ngOnInit()

      Object.values(this.message.packageSelected.courseIds).forEach((id: any)=> {
        this.api.getCourse({
          courseId: id
        }).subscribe((res)=> {
          this.allCourses.push(res)
        })
        console.log(this.allCourses);
        
      })
      

  }


}
