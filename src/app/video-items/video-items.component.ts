import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.css']
})
export class VideoItemsComponent {
 @Input() chapters$: Observable<any>
}
