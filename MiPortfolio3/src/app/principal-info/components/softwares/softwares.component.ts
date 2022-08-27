import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ISoftwareItem } from 'src/app/interfaces/software-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css']
})
export class SoftwaresComponent implements OnInit {

  constructor(
      private principalInfoService: PrincipalInfoService,
      private formBuilder: FormBuilder
    ) { }

  addIcon = faPlus;
  softwareItems:ISoftwareItem[] = this.principalInfoService.SoftwareItems;
  addFormActivated:boolean = false;
  softwareForm:FormGroup = this.formBuilder.group({
    name: ['',[Validators.required]]
  })

  ngOnInit(): void {
  }

  get Name():any {
    return this.softwareForm.get('name');
  }

  toggleAddSoftware():void{
    this.addFormActivated = !this.addFormActivated;
  }

  onSend(event:Event):void{
    event.preventDefault();
    if(this.softwareForm.valid){
      console.log("[SoftwaresComponent] dato enviado del form: ", this.softwareForm.value);
      this.principalInfoService.saveSoftware(this.softwareForm.value);
      this.softwareItems = this.principalInfoService.SoftwareItems;
      console.log("[SoftwaresComponent]Lista de Softwares actualizada");
      this.softwareForm.reset();
    }
    else{
      alert("Formulario invalido!");
      this.softwareForm.markAllAsTouched();
    }
  }

  modifiedSoftwareRecived(software:ISoftwareItem):void{
    console.log("[SoftwaresComponent] Recibido del hijo SoftwareItemComponent, software modificado: ", software);
    this.principalInfoService.modifySoftware(software);
    this.softwareItems = this.principalInfoService.SoftwareItems;
    console.log("[SoftwaresComponent] Actualizada lista de softwares: ", this.softwareItems);
  }

  removeSoftware(software:ISoftwareItem):void{
    console.log("[SoftwaresComponent] software recibido desde SoftwareItemComponent para eliminar: ", software);
    this.principalInfoService.removeSoftware(software);
    this.softwareItems = this.principalInfoService.SoftwareItems;
    console.log("[SoftwaresComponent] Lista actualizada luego de remoción: ",this.softwareItems);
  }
}
