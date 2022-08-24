import { Injectable } from '@angular/core';
import { Banner } from 'src/assets/mocks-lists/MockBanner';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private urlImage:string = Banner.url;

  constructor() { }

  get UrlImage():string { 
    return "url("+this.urlImage+")"; 
  }

  saveImage(url:string):void {
    console.log("[BannerService] url a almacenar: ", url);
    this.urlImage = url;
  }
}
