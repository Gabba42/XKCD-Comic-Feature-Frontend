import { Injectable } from '@angular/core';
import { XKCDComic } from "../model/XKCD";
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class XkcdServiceService {
private uri = 'http://localhost:8080/chat/messages';

  constructor(public httpClient: HttpClient) { }

  getComic() {
    return this.httpClient.get<XKCDComic>(this.uri+'/comic');
  }
}
