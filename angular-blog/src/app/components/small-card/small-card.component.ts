import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle:string = "";

  author:string = "Alex Rosendo";
  dataPost:string = "15/03/2023";

  constructor() { }

  ngOnInit(): void {
  }

}