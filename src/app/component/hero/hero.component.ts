import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseComponent } from 'src/app/pages/base/base.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent extends BaseComponent {
  videoModal: boolean = false
  id$ = new BehaviorSubject<any>('http://youtube.com/watch/v=ujcEft1JJUQ')
   
  afterViewInit: boolean = false;
 
  
  openVideo(){
    this.videoModal = !this.videoModal
  }



}
