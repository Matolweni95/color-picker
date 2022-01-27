import { Component } from '@angular/core';
import {HostListener} from '@angular/core';

@HostListener('click', ['$event.target'])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-picker';
  color: any;
  test:any;
  colors:any[] = [
  
    { value: 'red' , value2: 'Red'},
    { value: 'orange' , value2: 'Orange'},
    { value: 'green' , value2: 'Green'},
    { value: 'purple' , value2: 'Purple'},
    { value: 'grey' , value2: 'Grey'},
  
   
  ];

  colorChange(color:any){
    this.test = color;
    document.getElementById('demo')!.style.backgroundColor = this.test;
    document.getElementById('demo')!.style.color = "white";

  }
 
}
