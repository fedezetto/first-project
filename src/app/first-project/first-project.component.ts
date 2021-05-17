import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css']
})
export class FirstProjectComponent implements OnInit {


  vaso = "ciao";


  constructor() { }

  ngOnInit(): void {
  }
secondaFunzione (parametro)  {

alert(parametro)

}
}
