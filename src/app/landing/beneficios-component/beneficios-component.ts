import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-beneficios',
  imports: [RevealOnScrollDirective],
  templateUrl: './beneficios-component.html',
  styleUrl: './beneficios-component.css',
})
export class BeneficiosComponent {}
