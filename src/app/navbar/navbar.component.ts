import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() stringo ="ciao";

  @Output() cane = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

funzione (args) {

  this.cane.emit(args)

 }


}
