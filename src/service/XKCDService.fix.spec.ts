import { async, TestBed, inject } from "@angular/core/testing";
import { AppComponent } from "../app/app.component";
import { XkcdServiceService } from "./XKCDService";
import { HttpClientModule, HttpRequest, HttpParams, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule } from "@angular/platform-browser";

describe('XKCDService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [XkcdServiceService],
      imports: [HttpClientModule, BrowserModule, HttpClientTestingModule]
    }).compileComponents();
  }));
    //this works!
    it('should create XKCDService', inject([XkcdServiceService], (service: XkcdServiceService) => {
      expect(service).toBeTruthy();
    }));

describe('FakeHttpClientResponses', () => {
  beforeEach(() => {
    //set up the test environment
    TestBed.configureTestingModule ({
    imports: [
        HttpClientModule,
        HttpClientTestingModule
        ]
      });
  });
  //1. declare as an async test since the HttpClient works with Observables.
  it ('should create a request', async(
    //2. inject HttpClient, and HttpTestingController into the test
    inject ([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
      //3. send a simple request
      http.get('/comic').subscribe();
      //4. HttpTestingController supersedes `MockBackend` from the "old" Http package
      backend.expectOne ({
        url: '/comic',
        method: 'GET'
    });
  })
  )
);
});

describe('#getComic', () => ) {
  it('shouuld get xkcd comic', ()) {
    const comicMock = [
      {num: 1937},
      {year: "2018"},
      {title: "IATA Airport Abbreviations" },
      {alt: "IATA stands for International AirporT Abbreviation." },
      {img: "https://imgs.xkcd.com/comics/iata_airport_abbreviations.png" }
    ];

    service.
  }
}

});
