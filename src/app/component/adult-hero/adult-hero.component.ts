import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/pages/base/base.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adult-hero',
  templateUrl: './adult-hero.component.html',
  styleUrls: ['./adult-hero.component.css']
})
export class AdultHeroComponent extends BaseComponent{
  constructor( data: DataService, router: Router){
    super(data, router)
  }

  ngOnInit(): void {
      super.ngOnInit()
  }

}
