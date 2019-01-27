import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private Aroute:ActivatedRoute,private route:Router,private http:HttpService) { }

  private title:string;
  private description:string;
  private blogBody:string;
  private category:string;
  private possiblecat:string[] = ["action","comedy","adventure","sci-fi"];

  ngOnInit() {
  }

  createBlog(){
       
    let blogdata = {
    title:this.title,
    description:this.description,
    blogBody:this.blogBody,
    category:this.category

    }

    this.http.createblog(blogdata).subscribe(
      data=>{
       alert("success")
       console.log(data.data)
       setTimeout(()=>{
      this.route.navigate(['/view',data.data.blogId])
      },1000)
      },
     error=>{
        alert("sorry");
      }
    )
  }

}
