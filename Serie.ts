export class Serie {
    public id: number;
    public nombre: string;
    public  canal: string; 
    public  temporada: number; 

    constructor(idS: number, nombreS: string, canalS: string, temporadaS: number ) {
        this.id = idS;
        this.nombre = nombreS;
        this.canal = canalS; 
        this.temporada = temporadaS; 
    }
}