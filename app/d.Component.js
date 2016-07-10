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
    var dComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            }],
        execute: function() {
            dComponent = (function () {
                function dComponent() {
                    this.selectVideo = new core_1.EventEmitter();
                    this.videos = [
                        new video_1.Video2(101, "plantakvedran@gmail.com", "Edgar Miguel Ruiz Espinosa", "Cliente"),
                        new video_1.Video2(102, "squiretwitch@yahoo.com", "María Luna Java Ferreira", "Admin"),
                        new video_1.Video2(103, "brentdjones@gmail.com", "Tadeo Jesús Gutiérrez Diez", "Empleado"),
                        new video_1.Video2(104, "maryannbutcher@ymail.com", "Enrique Javier Torrens Laureles", "Cliente"),
                        new video_1.Video2(105, "zeusbond@hotmail.com", "Delmira Andrea Parrado Frey", "Admin"),
                        new video_1.Video2(106, "tobehster@yahoo.com", "Alma Brenda Oliva Acevedo", "Cliente"),
                        new video_1.Video2(107, "serdar_dmt@hotmail.com", "Abel Braulio Dorens Viera", "Empleado"),
                        new video_1.Video2(108, "giver_job@yahoo.com", "Guillermo Miguel Yáñez Cuevas", "Empleado"),
                        new video_1.Video2(109, "frapper102@gmail.com", "Eloísa Beatriz Giménez Gómez", "Cliente"),
                        new video_1.Video2(110, "tyler.kane@gmail.com", "Manuel Antonio Fernández Ortubey", "Admin")
                    ];
                }
                dComponent.prototype.onSelect = function (vid) {
                    console.log(JSON.stringify(vid));
                    //  alert(JSON.stringify(vid.nom + " " + " " + " " + " " + " " + "FUE AGREGADO A SU CARRITO"));
                    this.selectVideo.next(vid);
                    this.selectedVideo = vid; //detalle del producto
                };
                dComponent.prototype.mouseclickedme = function () {
                    alert('I was clicked');
                };
                dComponent = __decorate([
                    core_1.Component({
                        selector: 'my-d',
                        templateUrl: 'app/d.html',
                        inputs: ['videos'],
                        outputs: ['selectVideo']
                    }), 
                    __metadata('design:paramtypes', [])
                ], dComponent);
                return dComponent;
            }());
            exports_1("dComponent", dComponent);
        }
    }
});
//# sourceMappingURL=d.Component.js.map