import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { IReference } from 'src/app/interfaces/reference';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  editIcon = faSquarePen;
  reference:IReference =  this.principalInfoService.ReferenceData;
  editionActivated:boolean = false;

  referenceForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    position: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern("[0-9]*")]],
    email: ['', [Validators.required, Validators.email]],
  })

  ngOnInit(): void {
  }

  get Name(){
    return this.referenceForm.get('name');
  }

  get Surname(){
    return this.referenceForm.get('surname');
  }

  get Position() {
    return this.referenceForm.get('position');
  }

  get Phone() {
    return this.referenceForm.get('phone');
  }

  get Email() {
    return this.referenceForm.get('email');
  }

  toggleEdition():void {
    this.editionActivated = !this.editionActivated;
  }


  onSend(event:Event):void {
    event.preventDefault();

    if(this.referenceForm.valid){
      console.log("[ReferenceComponent] Formulario correcto: ", this.referenceForm.value as IReference);
      this.principalInfoService.modifyReference(this.referenceForm.value as IReference);
      this.reference = this.principalInfoService.ReferenceData;
      console.log("[ReferenceComponent] Referencia actaulizada: ", this.reference);
      this.referenceForm.reset();
    }
    else{ 
      alert("[ReferenceComponent] Formulario incorrecto");
      this.referenceForm.markAllAsTouched;
    }
  }
}
