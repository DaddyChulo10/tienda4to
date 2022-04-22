export class Producto{
    constructor(id,nom,mar,cos,caa,sta,so,vpro,repa,tba,mei,aud,cp,ra,cone,fech,fot)
    {
        this.id=id;
        this.nombre=nom;
        this.marca=mar;
        this.costo=cos;   
        this.cantidad=caa;
        this.estatus=sta;
        this.sistemao=so;
        this.velocidadp=vpro;
        this.pantalla=repa;
        this.bateria=tba;
        this.memoria=mei;
        this.audio=aud;
        this.cpu=cp;
        this.ram=ra;
        this.conexion=cone;
        this.fecha=fech;
        this.foto=fot;
        
        this.precio=0;
        this.calcularprecio();
    }
    calcularprecio(){
        this.precio=parseInt(this.costo)+(parseInt(this.costo)*0.15);
    }
}