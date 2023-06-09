import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  videoModal: boolean = false
  id$ = new BehaviorSubject<any>('http://youtube.com/watch/v=ujcEft1JJUQ')
   
  afterViewInit: boolean = false;

  ngOnInit(): void {
  }
 
  
  openVideo(){
    this.videoModal = !this.videoModal
  }



}
