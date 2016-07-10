 export class Video{
    id:number;
    num:number;
    nom:string;
    dire:string;
    fepag:string;    
    tser:string;
    tarmen:number;
    serext:string;
    preld:number;
    
    
    constructor(id:number, num:number, nom:string, dire:string, fepag:string, tser:string, tarmen:number, serext:string, preld?:number){
        this.id=id;
        this.num=num;
        this.nom=nom;
        this.dire=dire;
        this.fepag=fepag;
        this.tser=tser;
        this.tarmen=tarmen;
        this.serext=serext;
        this.preld=preld;
        
        
    }
    
}  

 export class Video2{
    clave:number;
    correo:string;
    nombre:string;
    tiusu:string;    
    
    
    constructor(clave:number, correo:string, nombre:string, tiusu?:string){
        this.clave=clave;
        this.correo=correo;
        this.nombre=nombre;
        this.tiusu=tiusu;
        
        
    }
    
}  