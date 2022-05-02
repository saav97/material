import { Component, OnInit } from '@angular/core';
import { AnimalDescription } from 'src/app/model/animal-description';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public info: AnimalDescription[];
  public user:boolean = false;

  constructor() {
    this.info = [
      {
        nombre: "Shiba Inu",
        caracteristicas:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        avatar:"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');background-size: cover",
        imagen:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        tipo:'Dog Breed'
      },
      {
        nombre:'Dogo Argentino',
        caracteristicas:'El dogo argentino es una raza de perro de presa utilizada para la caza mayor, es originaria de la Provincia de Córdoba, región mediterránea de la República Argentina.',
        avatar:"background-image: url('https://th.bing.com/th/id/R.74a08ee893383f31eb7760e378e30d54?rik=dIaSp10I%2fIGYWQ&pid=ImgRaw&r=0');background-size: cover",
        imagen:'https://perrosysusrazas.com/wp-content/uploads/2014/06/801-x-665.jpg',
        tipo:'Dog Hunter'
      },
      {
        nombre:'Dragon de Comodo',
        caracteristicas:'El dragón de Komodo (Varanus komodoensis), también llamado monstruo de Komodo y varano de Komodo, es una especie de saurópsido de la familia de los varánidos, endémico de algunas i…',
        avatar:"background-image: url('https://th.bing.com/th/id/R.62d012b089570d2d2e3687a27aa04f5c?rik=lMdid30sM7PdMg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Yu84ifbkuzU%2fUw9eTQSPm9I%2fAAAAAAAACKw%2fzHUICIAZBfE%2fs1600%2f140304_03_DRAGON%2bKOMODO.jpg&ehk=YYSaUTzsXmSKPZ%2fYrYQVYKVIA2MB5HgD5WkZwE9MtTk%3d&risl=&pid=ImgRaw&r=0');background-size: cover",
        imagen:'https://th.bing.com/th/id/OIP.00lpI2pAohZmA6WmFPimAQHaEf?pid=ImgDet&rs=1',
        tipo:'Reptiliano'
      }
    ]

  }

  ngOnInit(): void {
  }

  login(){
    this.user = true;
  }

  logout(){
    this.user = false;
  }

}
