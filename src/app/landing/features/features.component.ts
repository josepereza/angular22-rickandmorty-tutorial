import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {}
