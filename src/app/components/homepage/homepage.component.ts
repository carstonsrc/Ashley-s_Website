import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';
import { CARDS } from 'src/app/mock-cards';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cards = CARDS;
 


  constructor() { }

  ngOnInit(): void {
  }

}
