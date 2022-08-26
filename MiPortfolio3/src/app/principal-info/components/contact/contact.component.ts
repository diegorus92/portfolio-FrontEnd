import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { IContactItem } from 'src/app/interfaces/contact-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService,
              private formBuilder: FormBuilder) { }

  addIcon = faPlus;
  contactItems:IContactItem[] = this.principalInfoService.ContactItems;
  formActivated:boolean = false;

  contactForm:FormGroup = this.formBuilder.group({
    iconName:['', [Validators.required]],
    data:['', [Validators.required]]
  })

  iconNameToModify:string = "";
  dataToModify:string = "";
  idToModify:number = -1;

  ngOnInit(): void {
  }

  get IconName(): any {
    return this.contactForm.get('iconName');
  }

  get Data(): any {
    return this.contactForm.get('data');
  }

  toggleAddContact():void{
    this.formActivated = !this.formActivated;
  }

  onSend(event:Event):void{
    event.preventDefault;

    if(this.contactForm.valid){
      if(this.idToModify > -1){
        this.contactForm.value.id = this.idToModify;
        console.log("[ContactComponent]Contacto a modificado en formulario: ", this.contactForm.value);
        this.principalInfoService.saveContact(this.contactForm.value);
        this.contactItems = this.principalInfoService.ContactItems;
        this.clearcontactToModify();
        this.contactForm.reset();
      }
      else{
        console.log("[ContactComponent]Nuevo contacto en formulario: ", this.contactForm.value);
        this.principalInfoService.saveContact(this.contactForm.value as IContactItem);
        this.contactItems = this.principalInfoService.ContactItems;
        console.log("[ContactComponent] lista actualizada: ", this.contactItems);
        this.contactForm.reset();
      }
      
    }
    else{ 
      alert("Formulario inválido");
      this.contactForm.markAllAsTouched();
    }
  }

  private loadContactInfoToModify(contact:IContactItem):void{
    this.iconNameToModify = contact.iconName;
    this.dataToModify = contact.data;
    this.idToModify = contact.id!;
    console.log("[ContactComponent] datos cargados para modificar: ", this.iconNameToModify, " ", this.dataToModify, " ", this.idToModify);
  }

  private clearcontactToModify():void{
    this.iconNameToModify = "";
    this.dataToModify = "";
    this.idToModify = -1;
    console.log("[ContactComponent] datos  para modificar limpiados: ", this.iconNameToModify, " ", this.dataToModify, " ", this.idToModify);
  }

  modifyContact(contactRecived:IContactItem):void{
    console.log("[ContactComponent] contacto recibido el ContactItemComponent: ", contactRecived);
    this.loadContactInfoToModify(contactRecived);
    this.formActivated = true;
  }

  removeContact(contactRecived:IContactItem):void{
    console.log("[ContactComponent] contacto recibido del ContactItemComponent a eliminar: ", contactRecived);
    this.principalInfoService.removeContact(contactRecived);
    this.contactItems = this.principalInfoService.ContactItems;
  }
}
