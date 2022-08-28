import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { IIdiomItem } from 'src/app/interfaces/idiom-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-idioms',
  templateUrl: './idioms.component.html',
  styleUrls: ['./idioms.component.css']
})
export class IdiomsComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  addIcon = faPlus;
  idioms:IIdiomItem[] = this.principalInfoService.Idioms;
  formActivated:boolean = false;

  idiomForm:FormGroup = this.formBuilder.group({
    name:['', [Validators.required]],
    value:['', [Validators.required]],
  })

  ngOnInit(): void {
  }

  get Name(){
    return this.idiomForm.get('name');
  }

  get Value(){
    return this.idiomForm.get('value');
  }

  toggleForm():void{
    this.formActivated = !this.formActivated;
  }

  onSend(event:Event):void {
    event.preventDefault();

    if(this.idiomForm.valid){
      console.log("[IdiomsComponent] Nuevo idioma del form: ", this.idiomForm.value);
      this.principalInfoService.saveIdiom(this.idiomForm.value as IIdiomItem);
      this.idioms = this.principalInfoService.Idioms;
      console.log("[IdiomsComponent]Idiomas actualizados: ", this.idioms);
      this.idiomForm.reset();
    }
    else{
      alert("[IdiomsComponent] Formulario incorrecto: ");
      this.idiomForm.markAllAsTouched();
    }
  }

  modifiedIdiomRecived(idiom:IIdiomItem){
    console.log("[IdiomsComponent] Valor de idioma modificado recibido: ",idiom);
    this.principalInfoService.modifyIdiom(idiom);
    this.idioms = this.principalInfoService.Idioms;
    console.log("[IdiomsComponent] Actualizada lista de idiomas: ", this.idioms);
  }

  removeIdiomRecived(idiom:IIdiomItem):void{
    console.log("[IdiomsComponent] Idioma a eliminar recibido del IdiomItemComponent: ", idiom);
    this.principalInfoService.removeIdiom(idiom);
    this.idioms = this.principalInfoService.Idioms;
    console.log("[IdiomsComponent] Actualizada lista de idiomas: ", this.idioms);
  }
}
