import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PulidoRojoComponent } from './pulido-rojo/pulido-rojo.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: 'header', component:HeaderComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'registro', component:RegistroComponent},
    {path: 'pulidorojo', component:PulidoRojoComponent}
];