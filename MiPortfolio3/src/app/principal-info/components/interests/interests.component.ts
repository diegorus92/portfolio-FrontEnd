import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IInterest } from 'src/app/interfaces/interest-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  addIcon = faPlus;
  interests: IInterest[] = this.principalInfoService.Interests;
  formActive = false;
  interestForm: FormGroup = this.formBuilder.group({
    label: ['', [Validators.required]],
    description: ['']
  })
  interestRecivedTemp:IInterest = {
    id: -1,
    label: '',
    description: ''
  };

  ngOnInit(): void {
  }

  get Label(){
    return this.interestForm.get('label');
  }

  toggleForm():void{
    this.formActive = !this.formActive;
  }

  saveInterest(interest: IInterest):void{
    this.principalInfoService.saveInterest(interest);
  }

  interestToEditRecived(interest: IInterest):void{
    console.log("[InterestsComponent] Recibido de InterestItemComponent: ", interest);
    this.interestRecivedTemp = interest;
    this.formActive = true;
  }

  modifyInterest(interest: IInterest):void{
    this.principalInfoService.modifyInterest(interest);
  }

  clearInterestTemp(interest: IInterest):void{
    interest.id! = -1;
    interest.label = '';
    interest.description = '';
  }

  interestToRemove(interest: IInterest):void{
    this.principalInfoService.removeInterest(interest);
    this.interests = this.principalInfoService.Interests;
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.interestForm.valid){
      if(this.interestRecivedTemp.id! > -1){
        this.interestForm.value.id! = this.interestRecivedTemp.id;
        this.modifyInterest(this.interestForm.value as IInterest);
        this.clearInterestTemp(this.interestRecivedTemp);
        this.interests = this.principalInfoService.Interests;
        console.log("[InterestsComponent] Lista actualizada luego de modificación: ", this.interests);
        this.formActive = false;
        this.interestForm.reset();
      }
      else{ 
        console.log("[InterestsComponent] Recibido del formulario: ", this.interestForm.value);
        this.saveInterest(this.interestForm.value as IInterest);
        this.interests = this.principalInfoService.Interests;
        console.log("[InterestsComponent] Lista actualizada: ", this.interests);
        this.interestForm.reset();
      }
      
    }
    else{
      alert("[InterestsComponent] Formulario incorrecto");
    }
  }
}
