import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  name : string;
  email : string;
  phone : string;
  
  address: string;
  college:string;
  employee:string;
  
}
