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
      console.log("[ProfessionalExpComponent] Recibido del formulario: ", this.experienceForm.value);
      this.principalInfoService.saveExperience(this.experienceForm.value as IProfessionalExpItem);
      this.professionalExpItems = this.principalInfoService.PorfessionalExpItems;
      console.log("[ProfessionalExpComponent] Actaulizada lista ", this.professionalExpItems);
      this.experienceForm.reset();
    }
    else{
      alert("[ProfessionalExpComponent] Error en formulario!");
      this.experienceForm.markAllAsTouched();
    }
  }

}
