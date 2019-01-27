import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken = '?authToken=MjEyZGQzYTI5NDJjMTk3ODg0M2I1Yjc3YWQ2MjI1YzBhYWRiMGEwZTM5YjVkZjdjNjIwNzEwZWViYTQwNTQ5YmQ5NjJhYzA3OTM5ZmE5YTRhN2Q3ZTk0ZGYyNTYzZDllZDQ2MTQzMjQ4YTNlNDBkMzUyN2IzY2YxYmMwZTNkMzViOTc1';
  public allblogs;
  public currentblog;
  public createblogs;
  public edit;
  public delete;
  constructor(private http:HttpClient) { }



getallblogs(){
    
   this.allblogs = this.http.get(this.baseUrl + 'all' + this.authToken)
   return this.allblogs;

}

getinfo(blogId){
  this.currentblog = this.http.get(this.baseUrl + 'view/' + blogId + this.authToken)
  return this.currentblog;
}


createblog(blogdata){

  this.createblogs = this.http.post(this.baseUrl + 'create' + this.authToken,blogdata)
   return this.createblogs;
}

editblog(blogId,alldata){
this.edit = this.http.put(this.baseUrl + blogId + '/edit' + this.authToken,alldata)
return this.edit;
}

deleteblog(blogId){
  let data ={}
this.delete = this.http.post(this.baseUrl + blogId + '/delete' + this.authToken,data)
return this.delete;
}

}
