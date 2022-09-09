import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorka';
  licznik:number = 0;
  urlZdj1:string = "assets/images/gory1.jpg";
  urlZdj2:string = "assets/images/gory2.jpg";
  urlZdj3:string = "assets/images/gory3.jpg";
  kursy:string[] = [
    "Programowanie w JS",
    "Algorytmy",
    "Zarządzanie projektami",
    "Programowanie SPA w Angular"
  ];
  czyAktywne:boolean = true;
  napis:string = "Ukryj zdjęcie";
  zwieksz():void{
    this.licznik++;
  }
  zamiana():void{
    this.czyAktywne = !this.czyAktywne;
    if(this.czyAktywne == false)
    {
      this.napis = "Pokaż zdjęcie";
    }
    else
    this.napis = "Ukryj zdjęcie";
  }
}