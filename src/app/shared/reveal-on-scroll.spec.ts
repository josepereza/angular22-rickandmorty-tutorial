import { ElementRef, Renderer2 } from '@angular/core';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';
import { vi } from 'vitest';

describe('RevealOnScrollDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const renderer = {
      addClass: vi.fn(),
      removeClass: vi.fn(),
    } as unknown as Renderer2;
    const directive = new RevealOnScrollDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
