import { Component, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  editIcon = faSquarePen;
  editionActive: boolean = false;

  constructor(private bannerService: BannerService) { }

  image:string = this.bannerService.UrlImage;
  input:string = "";

  ngOnInit(): void {
  }

  toggleEdition():void {
    this.editionActive = !this.editionActive;
  }

  clearInput():void{
    this.input = "";
  }

  saveImage(url:string):void {
    console.log("[BannerComponent] url a guardar: ", url);
    this.bannerService.saveImage(url);
    this.image = this.bannerService.UrlImage;
    this.clearInput();
  }

}
