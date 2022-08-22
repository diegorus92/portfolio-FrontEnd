import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISocialNetwork } from 'src/app/interfaces/social-network';

@Component({
  selector: 'app-social-net-form',
  templateUrl: './social-net-form.component.html',
  styleUrls: ['./social-net-form.component.css']
})
export class SocialNetFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  socialNetForm: FormGroup = this.formBuilder.group({
    iconName: ['', [Validators.required]],
    link: ['', [Validators.required]],
  })

  @Output() newSocialNetEvent = new EventEmitter<ISocialNetwork>();

  ngOnInit(): void {
  }

  get Link():any {
    return this.socialNetForm.get('link');
  }

  get IconName():any {
    return this.socialNetForm.get('iconName');
  }

  addNewSocialNet(socialNet: ISocialNetwork){
    this.newSocialNetEvent.emit(socialNet);
  }

  onSend(event: Event): void {
    event.preventDefault;

    if(this.socialNetForm.valid){
      console.log("Social Network Form:");
      console.log(this.socialNetForm.value);
      this.addNewSocialNet(this.socialNetForm.value as ISocialNetwork);
      this.socialNetForm.reset();
    }
    else{ 
      alert("Formulario inválido");
      this.socialNetForm.markAllAsTouched();
    }
  }

}
