import { Component, ElementRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-motivacion-component',
  imports: [],
  templateUrl: './motivacion-component.html',
  styleUrl: './motivacion-component.css',
 host: {
    class: 'jumbotron-load-animation'
  },
})
export class MotivacionComponent implements OnInit, OnDestroy {

private el = inject(ElementRef); // Inyectamos la referencia al elemento HTML

  private quotes: string[] = [
    'El éxito no es el destino, es la consistencia en el camino.',
    'La innovación distingue a los líderes de los seguidores.',
    'Tu visión merece una infraestructura técnica que no tenga límites.',
    'El software del mañana se construye con las decisiones que tomas hoy.'
  ];

  currentQuote = signal<string>(this.quotes[0]);
  showQuote = signal<boolean>(true);
  
  // Signal para controlar la animación del Jumbotron entero
  isVisible = signal<boolean>(false);
  
  private quoteIndex = 0;
  private intervalId: any;
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    // 1. Creamos un observador nativo que escuche cuando el Jumbotron ya exista físicamente
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Le damos un respiro mínimo de 20ms para asegurar que el CSS base aplicó el opacity: 0
        setTimeout(() => {
          this.isVisible.set(true); 
        }, 20);
        
        // Dejamos de observar ya que solo queremos que se anime la primera vez
        this.observer?.disconnect();
      }
    }, { threshold: 0.2 }); // Se dispara cuando se ve el 10% del componente

    this.observer.observe(this.el.nativeElement);

    // 2. Intervalo para las frases
    this.intervalId = setInterval(() => {
      this.showQuote.set(false);

      setTimeout(() => {
        this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
        this.currentQuote.set(this.quotes[this.quoteIndex]);
        this.showQuote.set(true);
      }, 300);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.observer) this.observer.disconnect();
  }
}
