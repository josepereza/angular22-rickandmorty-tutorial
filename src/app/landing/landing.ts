import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { Features } from './features/features.component';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer.component';
import { BeneficiosComponent } from './beneficios-component/beneficios-component';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, Features, NavbarComponent, FooterComponent, BeneficiosComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
