import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  

  public currentBlog;
  public possiblecat:string[] = ["comedy","check","weapon","bullet"];
  constructor(private Aroute:ActivatedRoute,private route:Router,private blogs:HttpService) { }

  ngOnInit() {

    let MyblogId = this.Aroute.snapshot.paramMap.get('blogId');
       let currentBlog = this.blogs.getinfo(MyblogId).subscribe(
         data=>{
           this.currentBlog = data["data"];
         },
         error=>{
         console.log("sorry bro")
         }
       )
  }

  editBlog(){
   
      this.blogs.editblog(this.currentBlog.blogId,this.currentBlog).subscribe(
         data=>{
           this.currentBlog = data["data"];
           console.log(data)
          setTimeout(()=>{
            this.route.navigate(['/view',this.currentBlog.blogId])

          })
         },
         error=>{
         console.log("sorry bro")
         }
       )
  }

}
