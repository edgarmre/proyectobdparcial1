System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var fComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            fComponent = (function () {
                function fComponent() {
                }
                fComponent.prototype.calcular = function (val1, val2) {
                    if (parseFloat(val1) < 8000) {
                        this.enganche = ((parseFloat(val2) * .15));
                        this.messageEnganche = "Por el 15% del precio de la casa el enganche es:" + this.enganche;
                        this.mensualidad = (parseFloat(val2) - (parseFloat(val2) * .15)) / 120;
                        this.messageMensualidad = "La mensualidad por 10 años es:" + this.mensualidad;
                    }
                    else if (parseFloat(val1) >= 8000) {
                        this.enganche = ((parseFloat(val2) * .30));
                        this.messageEnganche = "Por el 30% del precio de la casa el enganche es:" + this.enganche;
                        this.mensualidad = (parseFloat(val2) - (parseFloat(val2) * .30)) / 84;
                        this.messageMensualidad = "La mensualidad por 7 años es:" + this.mensualidad;
                    }
                };
                fComponent = __decorate([
                    core_1.Component({
                        selector: 'my-f',
                        templateUrl: 'app/f.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], fComponent);
                return fComponent;
            }());
            exports_1("fComponent", fComponent);
        }
    }
});
//# sourceMappingURL=f.Component.js.map