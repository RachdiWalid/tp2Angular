import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.css']
})
export class CarreComponent implements OnInit {
  carre:number;
  
onKeyUp(event:KeyboardEvent)
{
 this.carre= parseFloat((<HTMLInputElement>event.target).value) * parseFloat((<HTMLInputElement>event.target).value);
//this.carre=(parseFloat(<HTMLInputElement>event.target).value)*(parseFloat(<HTMLInputElement>event.target).value);
}
  constructor() { }

  ngOnInit() {
  }

}
