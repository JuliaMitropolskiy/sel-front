import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-seul',
  templateUrl: './offre-seul.component.html',
  styleUrls: ['./offre-seul.component.css']
})
export class OffreSeulComponent implements OnInit {

  @Input() offre;

  @Input() showFooter;

  constructor() { }

  ngOnInit() {
  }

}
