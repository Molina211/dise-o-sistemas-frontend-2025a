import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  mostrarHeader = true;
  mostrarFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.verificarRuta();
    });
  }

  verificarRuta() {
    const rutasOcultas = ['/pulidorojo', '/registro'];
    this.mostrarHeader = !rutasOcultas.includes(this.router.url);
    this.mostrarFooter = !rutasOcultas.includes(this.router.url);
  }
}
