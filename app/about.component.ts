import {Component,EventEmitter} from 'angular2/core';
//import {Config} from './config.service';

import {Video} from './video';
@Component({
    selector: 'my-about',
    templateUrl:'app/about.html',
    inputs: ['videos'],
    outputs: ['selectVideo']
})

export class aboutComponent{

//title=Config.TITLE_PAGE;
    videos:Array<Video>;
    
    constructor(){
        this.videos=[
             
            new Video(1, 24515010,"Edgar Miguel Ruiz Espinosa","CALLE AGUSTIN LARA NO. 69-B","Septiembre","Internet",599,"Claro Video",24),                      
            new Video(2, 67493762,"Manuel Antonio Fernández Ortubey","AV. INDEPENDENCIA NO. 241","Noviembre","Telefonia y Television",499,"Dropbox",30),
            new Video(3, 22348697,"Eloísa Beatriz Giménez Gómez","CALLE OCAMPO NO 14","Enero","Telefonia",699,"Claro Video",15),
            new Video(4, 22986547,"Guillermo Miguel Yáñez Cuevas","AV. 5 DE MAYO NO 1253","Abril","Internet y Telefonia",799,"Claro Musica",10),
            new Video(5, 28465784,"Abel Braulio Dorens Viera","CALLE ALDAMA NO 156","Agosto","Internet",499,"Claro Video",28),
            new Video(6, 98765478,"Alma Brenda Oliva Acevedo","CALLE IGNACIO RAYON NO.949","Julio","Television",299,"Evento Especial",28),
            new Video(7, 71237485,"Delmira Andrea Parrado Frey","CENTRAL ESQ. BENITO JUAREZ","Febrero","Infinitum Mail",349,"Dropbox",32),
            new Video(8, 22235049,"Enrique Javier Torrens Laureles","CALLE ALDAMA NO.233-A","Octubre","Internet",569,"Claro Musica",18),
            new Video(9, 22218214,"Tadeo Jesús Gutiérrez Diez","AV. FERROCARRIL S/N.","Marzo","Telefonia",759,"Dropbox",14),
            new Video(10, 87675943,"María Luna Java Ferreira","AV. JESUS CARRANZA NO 1651 ALTOS","Mayo","Television",399,"Claro Musica",19)
        ]
    }     

selectVideo=new EventEmitter();
    
   selectedVideo:Video; //detalle del producto
    
    onSelect(vid:Video){
        console.log(JSON.stringify(vid));
      //  alert(JSON.stringify(vid.nom + " " + " " + " " + " " + " " + "FUE AGREGADO A SU CARRITO"));
        this.selectVideo.next(vid); 
        
        this.selectedVideo=vid;   //detalle del producto
    }
    
    mouseclickedme(){
        alert('I was clicked');
    } 
 } 
