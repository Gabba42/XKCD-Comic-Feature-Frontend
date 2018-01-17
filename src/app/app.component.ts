import { Component } from '@angular/core';
import { XkcdServiceService } from "../service/XKCDService";
import { XKCDComic } from "../model/XKCD";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showComic = false;
  xkcdComic: XKCDComic;
  title = 'XKCD Comic';

  constructor(private xkcdService: XkcdServiceService) {
    this.getCurrentComic(); 
  }

  getCurrentComic() {
    this.xkcdService.getComic().subscribe((res: XKCDComic) => {
    console.log(res);
    this.xkcdComic = new XKCDComic(res['num'], res['year'], res['title'], res['alt'], res['img']);
  });
  }

  showComicStrip() {
    this.showComic = !this.showComic;
  }

}
