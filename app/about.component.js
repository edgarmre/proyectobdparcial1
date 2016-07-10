System.register(['angular2/core', './video'], function(exports_1, context_1) {
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
    var core_1, video_1;
    var aboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            }],
        execute: function() {
            aboutComponent = (function () {
                function aboutComponent() {
                    this.selectVideo = new core_1.EventEmitter();
                    this.videos = [
                        new video_1.Video(1, 24515010, "Edgar Miguel Ruiz Espinosa", "CALLE AGUSTIN LARA NO. 69-B", "Septiembre", "Internet", 599, "Claro Video", 24),
                        new video_1.Video(2, 67493762, "Manuel Antonio Fernández Ortubey", "AV. INDEPENDENCIA NO. 241", "Noviembre", "Telefonia y Television", 499, "Dropbox", 30),
                        new video_1.Video(3, 22348697, "Eloísa Beatriz Giménez Gómez", "CALLE OCAMPO NO 14", "Enero", "Telefonia", 699, "Claro Video", 15),
                        new video_1.Video(4, 22986547, "Guillermo Miguel Yáñez Cuevas", "AV. 5 DE MAYO NO 1253", "Abril", "Internet y Telefonia", 799, "Claro Musica", 10),
                        new video_1.Video(5, 28465784, "Abel Braulio Dorens Viera", "CALLE ALDAMA NO 156", "Agosto", "Internet", 499, "Claro Video", 28),
                        new video_1.Video(6, 98765478, "Alma Brenda Oliva Acevedo", "CALLE IGNACIO RAYON NO.949", "Julio", "Television", 299, "Evento Especial", 28),
                        new video_1.Video(7, 71237485, "Delmira Andrea Parrado Frey", "CENTRAL ESQ. BENITO JUAREZ", "Febrero", "Infinitum Mail", 349, "Dropbox", 32),
                        new video_1.Video(8, 22235049, "Enrique Javier Torrens Laureles", "CALLE ALDAMA NO.233-A", "Octubre", "Internet", 569, "Claro Musica", 18),
                        new video_1.Video(9, 22218214, "Tadeo Jesús Gutiérrez Diez", "AV. FERROCARRIL S/N.", "Marzo", "Telefonia", 759, "Dropbox", 14),
                        new video_1.Video(10, 87675943, "María Luna Java Ferreira", "AV. JESUS CARRANZA NO 1651 ALTOS", "Mayo", "Television", 399, "Claro Musica", 19)
                    ];
                }
                aboutComponent.prototype.onSelect = function (vid) {
                    console.log(JSON.stringify(vid));
                    //  alert(JSON.stringify(vid.nom + " " + " " + " " + " " + " " + "FUE AGREGADO A SU CARRITO"));
                    this.selectVideo.next(vid);
                    this.selectedVideo = vid; //detalle del producto
                };
                aboutComponent.prototype.mouseclickedme = function () {
                    alert('I was clicked');
                };
                aboutComponent = __decorate([
                    core_1.Component({
                        selector: 'my-about',
                        templateUrl: 'app/about.html',
                        inputs: ['videos'],
                        outputs: ['selectVideo']
                    }), 
                    __metadata('design:paramtypes', [])
                ], aboutComponent);
                return aboutComponent;
            }());
            exports_1("aboutComponent", aboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map