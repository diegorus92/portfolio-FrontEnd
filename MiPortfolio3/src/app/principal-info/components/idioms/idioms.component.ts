import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { IIdiomItem } from 'src/app/interfaces/idiom-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-idioms',
  templateUrl: './idioms.component.html',
  styleUrls: ['./idioms.component.css']
})
export class IdiomsComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  idioms:IIdiomItem[] = this.principalInfoService.Idioms;

  ngOnInit(): void {
  }

}
