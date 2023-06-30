import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CourseProgressService, LearnersService } from 'src/app/api/services';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent extends BaseComponent {
  data: any;
  options: any;
  myCourses$: Observable<any>

  constructor(data: DataService, router: Router, private api:LearnersService, private wholenessApi: CourseProgressService){
    super(data, router)
  }
  ngOnInit(): void {
      super.ngOnInit()
        this.myCourses$ = this.api.getLearnerPaidCourses()
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.wholenessApi.getWholenessProgress().subscribe((res)=> {
          console.log(res);
          
        })
        this.data = {
            labels: ['Social', 'Education', 'Spiritual', 'Identity'],
            datasets: [
                {
                    data: [50, 50, 100, 60],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-300'), documentStyle.getPropertyValue('--yellow-200'), documentStyle.getPropertyValue('--green-400'),  documentStyle.getPropertyValue('--yellow-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--yellow-800')]
                }
            ]
        };
        this.options = {
          cutout: '60%',
          plugins: {
              legend: null
          }
      };
  }
}
