System.register(['angular2/core', './inicio.Component', './about.Component', './examen.Component', './clientes.Component', './d.Component', './e.Component', './f.Component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, inicio_Component_1, about_Component_1, examen_Component_1, clientes_Component_1, d_Component_1, e_Component_1, f_Component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inicio_Component_1_1) {
                inicio_Component_1 = inicio_Component_1_1;
            },
            function (about_Component_1_1) {
                about_Component_1 = about_Component_1_1;
            },
            function (examen_Component_1_1) {
                examen_Component_1 = examen_Component_1_1;
            },
            function (clientes_Component_1_1) {
                clientes_Component_1 = clientes_Component_1_1;
            },
            function (d_Component_1_1) {
                d_Component_1 = d_Component_1_1;
            },
            function (e_Component_1_1) {
                e_Component_1 = e_Component_1_1;
            },
            function (f_Component_1_1) {
                f_Component_1 = f_Component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.calcular = function (val1, val2) {
                    if (val1 == "edgar" && val2 == "edge") {
                        this.logue = "BIENVENIDO EDGAR";
                    }
                    else {
                        this.logue = "ERROR, VERIFICA USUARIO O CONTRASEÑA";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/principal.html',
                        directives: [router_1.ROUTER_DIRECTIVES, inicio_Component_1.inicioComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/inicio', name: 'Inicio', component: inicio_Component_1.inicioComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_Component_1.aboutComponent },
                        { path: '/examen', name: 'Examen', component: examen_Component_1.examenComponent },
                        { path: '/clientes', name: 'Clientes', component: clientes_Component_1.clientesComponent },
                        { path: '/d', name: 'D', component: d_Component_1.dComponent },
                        { path: '/e', name: 'E', component: e_Component_1.eComponent },
                        { path: '/f', name: 'F', component: f_Component_1.fComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map