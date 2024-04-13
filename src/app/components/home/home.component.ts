import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {carouselAnimation} from '../../animation/animation.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],animations:[carouselAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initFlowbite()
  }
   images = [

   {img: '../../../assets/images/dubai.jpg',},
   {img: '../../../assets/images/Paris.jpg',},
   {img: '../../../assets/images/rome.jpg',},
   {img: '../../../assets/images/help.png',},
   {img: '../../../assets/images/help.png',},
   {img: '../../../assets/images/help.png',},
   {img: '../../../assets/images/help.png',},
   {img: '../../../assets/images/help.png',},
   {img: '../../../assets/images/help.png',},

    // Ajoutez ici vos URLs d'images supplémentaires
  ];

 @ViewChild('carousel') carousel!: ElementRef;
  scrollLeftValue = 0;

  scrollLeft() {
    this.scrollLeftValue -= 100; // Défilement vers la gauche (ajustez la valeur selon votre besoin)
  }

  scrollRight() {
    this.scrollLeftValue += 100; // Défilement vers la droite (ajustez la valeur selon votre besoin)
  }

  onScroll(event: Event) {
    // Désactiver le défilement horizontal pour maintenir le contrôle sur les boutons de défilement
    event.preventDefault();
  }
  // scrollLeft() {
  //   this.carousel.nativeElement.scrollLeft -= 100; // Défilement vers la gauche (ajustez la valeur selon votre besoin)
  // }

  // scrollRight() {
  //   this.carousel.nativeElement.scrollLeft += 300; // Défilement vers la droite (ajustez la valeur selon votre besoin)
  // }
}
