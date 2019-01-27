import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allblog;

  constructor(private http:HttpService) { }

  ngOnInit() {

    this.allblog =  this.http.getallblogs().subscribe(
       data =>{
         this.allblog = data['data'];
       },
       error=>{
         console.log("error");
       }
     )

  }

}
