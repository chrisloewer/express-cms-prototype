import { Injectable } from '@angular/core';
import { Post } from '../../classes/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Image } from '../../classes/image';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PostService {


  constructor(
    private http: HttpClient
  ) { }

  getPost(id): Observable<Post> {
    const postUrl = environment.apiUrl + '/postapi/' + id;
    return this.http.get<Post>(postUrl);
  }

  setPost(p: Post): Observable<any> {
    const postUrl = environment.apiUrl + '/postapi';
    const options = AuthService.getAuthHeaderOptions();
    return this.http.post(postUrl, p, options);
  }

  getGallery(): Observable<Image[]> {
    const postUrl = environment.apiUrl + '/image';
    return this.http.get<Image[]>(postUrl);
  }

  uploadImage(imageDataUri): Observable<any> {
    const postUrl = environment.apiUrl + '/image';
    const options = AuthService.getAuthHeaderOptions();

    // send only the data for the image
    // fileType will be double-checked by the server
    const params = {
      img: imageDataUri.split(',')[1]
    };
    return this.http.post(postUrl, params, options);
  }

  deleteImage(fileName): Observable<any> {
    const postUrl = environment.apiUrl + '/image/' + fileName;
    const options = AuthService.getAuthHeaderOptions();
    return this.http.delete(postUrl, options);
  }
}
