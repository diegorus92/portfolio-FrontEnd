import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { IEducation } from 'src/app/interfaces/education-item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  addIcon = faPlus;
  educationItems:IEducation[] = this.principalInfoService.EducationItems;
  formActive:boolean = false;
  
  educationForm:FormGroup = this.formBuilder.group({
    startDateYear:['', [Validators.required]],
    endDateYear: [''],
    city: ['', [Validators.required]],
    country: [, [Validators.required]],
    degree:['', [Validators.required]],
    institution: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  get StartDateYear(){
    return this.educationForm.get('startDateYear');
  }

  get EndDateYear(){
    return this.educationForm.get('endDateYear');
  }

  get City(){
    return this.educationForm.get('city');
  }

  get Country(){
    return this.educationForm.get('country');
  }

  get Degree(){
    return this.educationForm.get('degree');
  }

  get Institution(){
    return this.educationForm.get('institution');
  }

  toggleForm(): void {
    this.formActive = !this.formActive;
  }

  private saveEducation(education:IEducation): void {
    this.principalInfoService.saveEducation(education);
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.educationForm.valid){
      console.log("[EducationComponent] Recibido del formulario: ", this.educationForm.value);
      this.saveEducation(this.educationForm.value as IEducation);
      this.educationItems = this.principalInfoService.EducationItems;
      console.log("[EducationComponent] Lista actualizada: ", this.educationItems);
      this.educationForm.reset();
    }
    else{
      alert("[EducationComponent] formulario incorrecto");
      this.educationForm.markAllAsTouched();
    }
  }
}
