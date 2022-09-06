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
  educationItemTemp!:IEducation;

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

  educationToEdit(education:IEducation): void {
    console.log("[EducationComponent] Educación recibida desde EducationItemComponent: ", education);
    this.educationItemTemp = education;
    this.formActive = true;
  }

  clearEducationItemTemp(educationTemp:IEducation): void {
    educationTemp.id! = -1; 
    educationTemp.startDateYear = '';
    educationTemp.endDateYear = '';
    educationTemp.city = '';
    educationTemp.country = '';
    educationTemp.degree = '';
    educationTemp.institution = '';
  }

  educationToRemove(education:IEducation): void {
    console.log("[EducationComponent]Removiendo educación: ", education);
    this.principalInfoService.removeEducationItem(education);
    this.educationItems = this.principalInfoService.EducationItems;
    console.log("[EducationComponent]Lista actualizada luego de eliminació: ", this.educationItems);
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.educationForm.valid){
      if(this.educationItemTemp.id! > -1){
        this.educationForm.value.id! = this.educationItemTemp.id;
        this.principalInfoService.modifyEducationItem(this.educationForm.value as IEducation);
        this.clearEducationItemTemp(this.educationItemTemp);
        this.educationItems = this.principalInfoService.EducationItems;
        this.educationForm.reset();
        this.formActive = false;
        console.log("[EducationComponent] Lista actualizada luego de edición: ", this.educationItems);
      }
      else{
        console.log("[EducationComponent] Recibido del formulario: ", this.educationForm.value);
        this.saveEducation(this.educationForm.value as IEducation);
        this.educationItems = this.principalInfoService.EducationItems;
        console.log("[EducationComponent] Lista actualizada: ", this.educationItems);
        this.educationForm.reset();
      }
      
    }
    else{
      alert("[EducationComponent] formulario incorrecto");
      this.educationForm.markAllAsTouched();
    }
  }

}
