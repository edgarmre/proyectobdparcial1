import {Component,EventEmitter} from 'angular2/core';

import {Video2} from './video';
@Component({
    selector: 'my-d',
    templateUrl:'app/d.html',
    inputs: ['videos'],
    outputs: ['selectVideo']
    
})

export class dComponent{

videos:Array<Video2>;
    
    constructor(){
        this.videos=[
             
            new Video2(101, "plantakvedran@gmail.com","Edgar Miguel Ruiz Espinosa","Cliente"),                      
            new Video2(102, "squiretwitch@yahoo.com","María Luna Java Ferreira","Admin"),
            new Video2(103, "brentdjones@gmail.com","Tadeo Jesús Gutiérrez Diez","Empleado"),
            new Video2(104, "maryannbutcher@ymail.com","Enrique Javier Torrens Laureles","Cliente"),
            new Video2(105, "zeusbond@hotmail.com","Delmira Andrea Parrado Frey","Admin"),
            new Video2(106, "tobehster@yahoo.com","Alma Brenda Oliva Acevedo","Cliente"),
            new Video2(107, "serdar_dmt@hotmail.com","Abel Braulio Dorens Viera","Empleado"),
            new Video2(108, "giver_job@yahoo.com","Guillermo Miguel Yáñez Cuevas","Empleado"),
            new Video2(109, "frapper102@gmail.com","Eloísa Beatriz Giménez Gómez","Cliente"),
            new Video2(110, "tyler.kane@gmail.com","Manuel Antonio Fernández Ortubey","Admin")
        ]
    }     

selectVideo=new EventEmitter();
    
   selectedVideo:Video2; //detalle del producto
    
    onSelect(vid:Video2){
        console.log(JSON.stringify(vid));
      //  alert(JSON.stringify(vid.nom + " " + " " + " " + " " + " " + "FUE AGREGADO A SU CARRITO"));
        this.selectVideo.next(vid); 
        
        this.selectedVideo=vid;   //detalle del producto
    }
    
    mouseclickedme(){
        alert('I was clicked');
    } 

}