import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() socialNetToModify!: ISocialNetwork; //Recibe el ISocialNetwork a modificar desde el padre (NavBarComponent)

  ngOnInit(): void {
  }

  get Link():any {
    return this.socialNetForm.get('link');
  }

  get IconName():any {
    return this.socialNetForm.get('iconName');
  }

  //Emite al padre (NavBarComponent) un ISocialNetwork
  //(este metodo se ejecuta en el método onSend)
  addNewSocialNet(socialNet: ISocialNetwork){
    this.newSocialNetEvent.emit(socialNet);
  }

  //Al presionar el boton submit del template
  onSend(event: Event): void {
    event.preventDefault;

    if(this.socialNetForm.valid){
      if(!this.socialNetToModify){ //Si socialNetToModify está undefined
        console.log("[Form]: Social Network Form nueva:");
        console.log(this.socialNetForm.value);
        this.addNewSocialNet(this.socialNetForm.value as ISocialNetwork);//Emite el nuevo ISocialNetwork del form al padre (NavBarComponent)
        this.socialNetForm.reset();
      }
      else{ //Si socialNetToModify tiene información (o sea, que es un ISocialNetwork que ya existe, por tanto tiene id)
        console.log("[Form]: Social Network Form ya existente: ", this.socialNetToModify);
        this.socialNetForm.value.id = this.socialNetToModify.id; //Se añade el id de ISocialNetwork ya existente al del cargado en el form (que no tiene id)
        this.addNewSocialNet(this.socialNetForm.value as ISocialNetwork); //Emite el nuevo ISocialNetwork del form al padre (NavBarComponent)
        this.socialNetForm.reset();
      }
    }
    else{ 
      alert("Formulario inválido");
      this.socialNetForm.markAllAsTouched();
    }
  }

}
