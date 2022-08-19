import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor() { }

  @Input() doughnutChartData:any = {
      datasets: [{
        data: [100, 50, 100, 30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(222, 150, 132)'
        ]
      }],
      labels: [
      'Ajdkjsklf',
      'Fgsgkadjgkl',
      'Csfsdfsdg',
      'Intesdfaadf'
    ],
  } 
  

  ngOnInit(): void {
    
  }

    
}
