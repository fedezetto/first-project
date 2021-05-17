import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css']
})
export class FirstProjectComponent implements OnInit {


  @Input() stringa = "ciao" 



  constructor() { }

  ngOnInit(): void {
  }

}
