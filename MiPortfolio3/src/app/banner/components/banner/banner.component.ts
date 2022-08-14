import { Component, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  editIcon = faSquarePen;

  constructor() { }

  image:string = "url(../../../../assets/images/banner.jpg)";

  ngOnInit(): void {
  }

}
