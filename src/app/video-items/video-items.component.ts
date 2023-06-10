import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseProgressService, CoursesService, LearnersService } from '../api/services';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.css']
})
export class VideoItemsComponent implements OnInit{
 @Input() chapters$: Observable<any>
 @Input() activeIndex: number
 @Input() courseId: any;
 @Output() chapterItem = new EventEmitter()
  progress$: Observable<any>

 constructor(private api: CourseProgressService){
 }

 ngOnInit(): void {
  this.progress$ = this.api.getCourseProgress({
    courseId: this.courseId
  })
 }

  getChapterItem(event: any){
    this.chapterItem.emit(event)
  }
 }
