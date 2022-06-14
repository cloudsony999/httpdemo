
import { TestingService } from '../testing.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    
    <ul *ngFor="let y of e">
      <li>{{y.id}}. {{y.name}} - {{y.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  e:Employee[]=[];
     
  constructor(private a:TestingService) {
    console.log("inside cons...")
   }

  ngOnInit() {
    console.log("inside init...")
    this.a.getData().subscribe(data=>{this.e=data;
    });
        
  }

}

