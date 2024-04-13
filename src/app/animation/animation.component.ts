import { Component, OnInit } from '@angular/core';
 import { animate, style, transition, trigger } from '@angular/animations';





export const carouselAnimation = trigger('carouselAnimation', [
  transition('* => *', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
