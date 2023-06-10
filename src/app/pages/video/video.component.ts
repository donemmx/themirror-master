import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { truncate } from 'fs';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from 'src/app/api/services';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
@Input() source: any;
messages: Message[];
course$: Observable<any>
chapters$: Observable<any>
link$ = new BehaviorSubject<any>('')
loading: boolean = true
constructor( private api: CoursesService, private route:ActivatedRoute){
}
ngOnInit(){
this.route.params.subscribe((res)=> {
 this.course$ = this.api.getCourse({
    courseId: res.id
  })

  this.chapters$ = this.api.getChaptersForLoggedInLearners({
    courseId: res.id
  })

})
}


next(){
  
}

}
