import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover: string = "../../../assets/harry.jpg";
  cardTitle:string = "Harry Potter: Tudo que sabemos sobre a série do HBO Max";
  author:string = "Alex Rosendo";
  dataPost:string = "15/03/2023";
  cardContent:string = "A Warner Bros. Discovery oficializou a produção de uma série de TV baseada na franquia Harry Potter. Vamos ver, agora, tudo que foi revelado sobre a produção.";
  ngOnInit(): void {
  }

}
