import { Component, OnInit } from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { UserData } from 'src/app/interfaces/user';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  editIcon = faSquarePen;

  userData: UserData = this.principalInfoService.UserInfo;
  editionForm:boolean = false;
  maxCharacters = 300;

  userForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname:['', [Validators.required]],
    position:['', [Validators.required]],
    description!:['',[Validators.maxLength(this.maxCharacters)]],
  })

  get Name() { 
    return this.userForm.get('name');
  }

  get Surname() {
    return this.userForm.get('surname');
  }

  get Position() {
    return this.userForm.get('position');
  }

  get Description() {
    return this.userForm.get('description');
  }

  ngOnInit(): void {
  }

  toggleEdition(): void {
    this.editionForm = !this.editionForm;
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.userForm.valid){
      console.log("[UserComponent] Datos recibidos desde el form", this.userForm.value as UserData);
      this.principalInfoService.modifyUserData(this.userForm.value as UserData);
      this.userData = this.principalInfoService.UserInfo;
      console.log("[UserComponent]Usuario modificado: ", this.userData);
    }
    else{
      alert("[UserComponent] Formulario inválido");
      this.userForm.markAllAsTouched();
    }
  }
}
