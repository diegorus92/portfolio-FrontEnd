import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IProfessionalExpItem } from 'src/app/interfaces/professional-exp-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.css']
})
export class ProfessionalExpComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  addIcon = faPlus;
  professionalExpItems:IProfessionalExpItem[] = this.principalInfoService.PorfessionalExpItems;
  formActivated:boolean = false;

  experienceForm:FormGroup = this.formBuilder.group({
    startDate:['', [Validators.required]],
    endDate: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]],
    enterpriseName: ['', [Validators.required]],
    position: ['', [Validators.required]],
    description: [''],
  })

  professionalExpItemRecived: IProfessionalExpItem ={
    id: -1,
    startDate: '',
    endDate: '',
    city: '',
    country: '',
    enterpriseName: '',
    position: '',
    description: '',
  }

  ngOnInit(): void {
  }

  get StartDate(){
    return this.experienceForm.get('startDate');
  }

  get EndDate(){
    return this.experienceForm.get('endDate');
  }

  get City(){
    return this.experienceForm.get('city');
  }

  get Country(){
    return this.experienceForm.get('country');
  }

  get EnterpriseName(){
    return this.experienceForm.get('enterpriseName');
  }

  get Position(){
    return this.experienceForm.get('position');
  }

  get Description(){
    return this.experienceForm.get('description');
  }

  toggleForm(): void {
    this.formActivated = !this.formActivated;
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.experienceForm.valid){
      if(this.professionalExpItemRecived.id! > -1){
        this.experienceForm.value.id  = this.professionalExpItemRecived.id;
        console.log("[ProfessionalExpComponent] Dato modificado en formulario: ", this.experienceForm.value);
        this.principalInfoService.saveExperience(this.experienceForm.value as IProfessionalExpItem);
        console.log("[ProfessionalExpComponent] Item modificado");
        this.professionalExpItems = this.principalInfoService.PorfessionalExpItems;
        console.log("[ProfessionalExpComponent] Actaulizada lista ", this.professionalExpItems);
        this.clearProfessionalExpItem(this.professionalExpItemRecived);
        console.log("[ProfessionalExpComponent] Item temporal limpiado: ", this.professionalExpItemRecived);
        this.experienceForm.reset();
      }
      else{
        console.log("[ProfessionalExpComponent] Recibido del formulario: ", this.experienceForm.value);
        this.principalInfoService.saveExperience(this.experienceForm.value as IProfessionalExpItem);
        this.professionalExpItems = this.principalInfoService.PorfessionalExpItems;
        console.log("[ProfessionalExpComponent] Actaulizada lista ", this.professionalExpItems);
        this.experienceForm.reset();
      }
      
    }
    else{
      alert("[ProfessionalExpComponent] Error en formulario!");
      this.experienceForm.markAllAsTouched();
    }
  }

  professionalExpItemToModify(professionalExp:IProfessionalExpItem):void{
    console.log("[ProfessionalExpComponent] Recibido del ProfessionalExpItem: ", professionalExp);
    this.professionalExpItemRecived = professionalExp;
    console.log("[ProfessionalExpComponent] item recibido y cargado, ",this.professionalExpItemRecived);
    this.formActivated = true;
    }

  clearProfessionalExpItem(professionalExp:IProfessionalExpItem):void{
    professionalExp.id = -1;
  }

  professionalExpDelete(professionalExp:IProfessionalExpItem):void{
    console.log("[ProfessionalExpComponent] Item a eliminar: ", professionalExp);
    this.principalInfoService.deleteProfessionalExp(professionalExp);
    this.professionalExpItems = this.principalInfoService.PorfessionalExpItems;
    console.log("[ProfessionalExpComponent] Lista actualizada: ", this.professionalExpItems);
  }
}
