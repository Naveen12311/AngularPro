import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute,Router } from '@angular/router';

import { Location } from '@angular/common'



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ Location ]
})
export class ViewComponent implements OnInit {

  private currentBlog;

  constructor(private Aroute:ActivatedRoute,private route:Router,private http:HttpService , private location:Location) { }

  ngOnInit() {
   let myid = this.Aroute.snapshot.paramMap.get('blogId');
   this.http.getinfo(myid).subscribe(
     data =>{
       this.currentBlog = data["data"];

     },
     error=>{
       console.log("sorry");
     }
   )
  }

  deleteblog(){
    
    this.http.deleteblog(this.currentBlog.blogId).subscribe(
      data=>{
        alert("yo bro")
    setTimeout(()=>{
      this.route.navigate(['/home'])
    })
      },
      error=>{
        console.log("sorry")
      }
    )
  }

  back(){
    this.location.back();
  }

}

