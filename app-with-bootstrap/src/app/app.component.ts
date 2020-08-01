import { Component } from '@angular/core';
//import 'lodash';
import {random} from 'lodash';
//declare var _:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-with-bootstrap';
  randomNumber:any="Nill";

  showRandomNumber():void{
    this.randomNumber=random(1,20);
  }
}
