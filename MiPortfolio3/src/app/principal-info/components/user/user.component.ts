import { Component, OnInit } from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { UserData } from 'src/app/interfaces/user';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService, private formBuilder: FormBuilder) { }

  editIcon = faSquarePen;

  //userData: UserData = this.principalInfoService.UserInfo; Usado con el MockUserData
  usersData: UserData[] = [];
  userData:any = {name:"pipo", surname:"pepe", position:"person"};
  userId = 0;
  editionForm:boolean = false;
  maxCharacters = 300;

  userForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname:['', [Validators.required]],
    position:['', [Validators.required]],
    description:['',[Validators.maxLength(this.maxCharacters)]],
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
    
    console.log("Hola User!");
    this.principalInfoService.getUserInfo().subscribe((usersInfo) =>{
      console.log("User de api: ", usersInfo);
      this.usersData = usersInfo;
      this.userData = this.usersData[0];
      this.userId = usersInfo[0].userId;

      this.principalInfoService.usersInfo = usersInfo;
      this.principalInfoService.updateUserSubject();
    })

  }

  toggleEdition(): void {
    this.editionForm = !this.editionForm;
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.userForm.valid){
      /*console.log("[UserComponent] Datos recibidos desde el form", this.userForm.value as UserData);
      this.principalInfoService.modifyUserData(this.userForm.value as UserData);
      this.userData = this.principalInfoService.UserInfo;
      console.log("[UserComponent]Usuario modificado: ", this.userData);*/

      console.log("[UserComponent] Datos recibidos desde el form", this.userForm.value as UserData);

      let userToUpdate:UserData = this.userForm.value as UserData;
      //userToUpdate.id = this.userData.userId;
      userToUpdate.id = this.userId;
      console.log("[UserComponent] Usuario actualizado a cargar", userToUpdate);

      this.principalInfoService.putUserInfo(userToUpdate).subscribe(() => {
        console.log("[UserComponent] modified user ", userToUpdate);
        this.userData = userToUpdate;
      });
    }
    else{
      alert("[UserComponent] Formulario inválido");
      this.userForm.markAllAsTouched();
    }
  }
}
