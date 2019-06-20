import { Injectable } from '@angular/core'
import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
@Injectable()
export class LibraryService {
  //CHNAGE THIS FOR YOUR SERVER LIKE XAMPP IN HTTDOCS

  url="http://localhost/Library/public";
  constructor(private http: HttpClient ) {}
//FORM DATA WITH IMAGE
  public postImage(image,book,url ): Observable<any> {
    console.log(book)
    const formData = new FormData();
    var data = {  status: "COMPLETE"  };
    formData.append('image', image, image.name);
    formData.append('name', book.name);
    formData.append('author', book.author);
    formData.append('category_id', book.category_id);
    formData.append('publishDate', book.publishDate);
    formData.append('state', book.state);

    let headers = new HttpHeaders();
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', null);
    headers.set('Accept', "multipart/form-data");
    let params = new HttpParams();


    return this.http.post(this.url+'/api/'+url, formData, {
      headers
    })


  }
//GENERIC GET JSON
  public serviceGet(url): Observable<any> {
    return this.http.get(this.url+'/api/'+url, {
      headers: {'Content-Type': 'application/json'}
    })
  }
//GENERIC PUT
  public servicePut(id,url): Observable<any> {

    return this.http.put( this.url+'/api/'+url, JSON.stringify(id), {
      headers: {'Content-Type': 'application/json'}
    })
  }
  //GENERIC POST
    public servicePost(id,url): Observable<any> {

      return this.http.post( this.url+'/api/'+url, JSON.stringify(id), {
        headers: {'Content-Type': 'application/json'}
      })
    }



}
