import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mostrarFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.verificarRuta();
    });
  }

  verificarRuta() {
    const rutasOcultas = ['/pulidorojo', '/registro'];
    this.mostrarFooter = !rutasOcultas.includes(this.router.url);
  }
}
