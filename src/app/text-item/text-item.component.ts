import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.css']
})
export class TextItemComponent {
@Input() item: any
html: any
safehtmlStr: SafeHtml;
constructor( public dom: DomSanitizer ){
  this.safehtmlStr = dom.bypassSecurityTrustHtml(this.html);

}
}
