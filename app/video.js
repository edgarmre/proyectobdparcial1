System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Video, Video2;
    return {
        setters:[],
        execute: function() {
            Video = (function () {
                function Video(id, num, nom, dire, fepag, tser, tarmen, serext, preld) {
                    this.id = id;
                    this.num = num;
                    this.nom = nom;
                    this.dire = dire;
                    this.fepag = fepag;
                    this.tser = tser;
                    this.tarmen = tarmen;
                    this.serext = serext;
                    this.preld = preld;
                }
                return Video;
            }());
            exports_1("Video", Video);
            Video2 = (function () {
                function Video2(clave, correo, nombre, tiusu) {
                    this.clave = clave;
                    this.correo = correo;
                    this.nombre = nombre;
                    this.tiusu = tiusu;
                }
                return Video2;
            }());
            exports_1("Video2", Video2);
        }
    }
});
//# sourceMappingURL=video.js.map