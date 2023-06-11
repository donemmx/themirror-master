import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { truncate } from 'fs';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { CourseProgressService, CoursesService } from 'src/app/api/services';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() source: any;
  messages: Message[];
  course$: Observable<any>;
  chapters$: Observable<any>;
  link$ = new BehaviorSubject<any>('');
  loading: boolean = true;
  chapterItem: any;
  courseId: any
  of= of
  constructor(private api: CoursesService, private route: ActivatedRoute, private progressApi: CourseProgressService) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.courseId = res.id
      this.course$ = this.api.getCourse({
        courseId: res.id,
      });

      this.chapters$ = this.api
        .getChaptersForLoggedInLearners({
          courseId: res.id,
        })
        .pipe(
          tap((res: any) => {
            this.chapterItem = res[0].chapterItems[0];
            this.loading = false
          })
        );
    });

    this.progressApi.addCourseProgress({
      body: {
        courseId: this.courseId,
        chapterId: '45e0a84b-7954-4c25-adf9-24af25f6afb8',
        chapterItemId: '45e0a84b-7954-4c25-adf9-24af25f6afb8'
      }
    }).subscribe()
  }

  next() {}

  getChapterItem(event: any){
    console.log(event);
    this.chapterItem = event

  }

  // done()
}
