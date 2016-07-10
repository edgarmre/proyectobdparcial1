import {Component} from 'angular2/core';

import {inicioComponent} from './inicio.Component';
import {aboutComponent} from './about.Component';
import {examenComponent} from './examen.Component';
import {clientesComponent} from './clientes.Component';
import {dComponent} from './d.Component';
import {eComponent} from './e.Component';
import {fComponent} from './f.Component';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/principal.html',   
    directives:[ROUTER_DIRECTIVES, inicioComponent]

})

@RouteConfig([
    {path:'/inicio', name:'Inicio', component:inicioComponent, useAsDefault:true},
    {path:'/about', name:'About', component:aboutComponent},
    {path:'/examen', name:'Examen', component:examenComponent},
    {path:'/clientes', name:'Clientes', component:clientesComponent},
    {path:'/d', name:'D', component:dComponent},
    {path:'/e', name:'E', component:eComponent},
    {path:'/f', name:'F', component:fComponent},
  ])



export class AppComponent{
    
     logue:string; 

calcular(val1:string,val2:string)
{
    if (val1 == "edgar" && val2 == "edge") 
    {
       this.logue = "BIENVENIDO EDGAR";
    }
    else 
    {
       this.logue = "ERROR, VERIFICA USUARIO O CONTRASEÑA";
    }

}
}