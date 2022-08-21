import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-social-net-form',
  templateUrl: './social-net-form.component.html',
  styleUrls: ['./social-net-form.component.css']
})
export class SocialNetFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  socialNetForm: FormGroup = this.formBuilder.group({
    iconName: [''],
    link: [''],
  })

  ngOnInit(): void {
  }

  onSend(event: Event): void {
    console.log("Social Network Form:");
    console.log(this.socialNetForm.value);
    this.socialNetForm.reset();
  }

}
