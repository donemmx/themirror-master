import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../api/services';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.css'],
})
export class LearningCardComponent implements OnInit {
  @Input() courseId: any;
  @Input() course: any
  constructor(private api: CoursesService){}

  ngOnInit(): void {
  
  }
}
