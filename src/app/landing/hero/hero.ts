import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  viewChild,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements AfterViewInit {
  readonly title = viewChild.required<ElementRef>('title');
  readonly subtitle = viewChild.required<ElementRef>('subtitle');
  readonly cta = viewChild.required<ElementRef>('cta');

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const badge = document.querySelector('.hero-badge');
    if (badge) this.renderer.addClass(badge, 'animate');
    this.renderer.addClass(this.title().nativeElement, 'animate');
    this.renderer.addClass(this.subtitle().nativeElement, 'animate');
    this.renderer.addClass(this.cta().nativeElement, 'animate');
    const img = document.querySelector('.hero-image-wrapper');
    if (img) this.renderer.addClass(img, 'animate');
  }
}
