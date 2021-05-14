import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  card = [

    { titolo: "Ceo", descrizione: "Borello Federico", img: "/assets/CEO.jpg", footer: "Capoccione", href: "https:/www.skype.it", contatta: "chiama CEO", attiva: true },
    { titolo: "Html/css", descrizione: "Omar", img: "/assets/html-css.jpg", footer: "Pippo", href: "https://www.google.it/", contatta: "chiama Pippo", attiva: true },
    { titolo: "Sviluppatore Angular", descrizione: "Narcis", img: "/assets/angular.png", footer: "Pluto", href: "https:/www.yahoo.it", contatta: "chiama Pluto", attiva: false},
    { titolo: "Project Manager", descrizione: "Simone", img: "/assets/pj.png", footer: "Paperino", href: "https:/www.twitter.it", contatta: "chiama Paperino", attiva: true },
  ]

  message = "ciao"

  constructor() { }

  ngOnInit(): void {
  }

}


