import {Component} from 'angular2/core';

@Component({
    selector: 'my-f',
    templateUrl:'app/f.html'
    
})

export class fComponent{
    mensualidad:number;
    enganche:number;
    messageEnganche:string;
    messageMensualidad:string;

    calcular(val1:string,val2:string){
        
        if (parseFloat(val1)<8000) {

            this.enganche=((parseFloat(val2)*.15));
            this.messageEnganche="Por el 15% del precio de la casa el enganche es:"+this.enganche;
            this.mensualidad=(parseFloat(val2)-(parseFloat(val2)*.15))/120;
            this.messageMensualidad="La mensualidad por 10 años es:"+this.mensualidad;
        }
        else if (parseFloat(val1)>=8000){
            this.enganche=((parseFloat(val2)*.30));
            this.messageEnganche="Por el 30% del precio de la casa el enganche es:"+this.enganche;
            this.mensualidad=(parseFloat(val2)-(parseFloat(val2)*.30))/84;
            this.messageMensualidad="La mensualidad por 7 años es:"+this.mensualidad;
        }
    }
}