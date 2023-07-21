interface smartphone {
    credito: number;
    numeroChiamate: number;
    costoMinuto: number
    registroChiamate: Array<{id:number, durata:number, data:string, ora:string}>;

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void


}


class Telefono implements smartphone {
    public credito: number;
    public numeroChiamate:number
    public costoMinuto: number;

    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito
        this.numeroChiamate = _numeroChiamate
        this.costoMinuto = 0.20
    }

    public registroChiamate: { id: number; durata: number; data: string; ora: string; }[] = [] 

    public ricarica(euro: number): void {
        this.credito += euro
    }

    public numero404(): string {
        return (Math.round(this.credito * 100) /100).toFixed(2)
    }

    public getNumeroChiamate() {
        return this.numeroChiamate   
    }

    public chiamata(min:number):void {
        // effettua una chiamata virtualmente
        let costoChiamata: number = min * this.costoMinuto

        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata
            this.numeroChiamate++

        } else {
            console.log('Credito insufficiente per effettuare la chiamata')
        }
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}

function printData(utente: Telefono): void {
    console.log(`Credito residuo è: ${utente.numero404()} €`);
    console.log(`L'utente ha effettuato ${utente.getNumeroChiamate()} chiamate`);
    utente.azzeraChiamate()
    console.log(`Chiamate azzerate, n. chiamate: ${utente.numeroChiamate}`);
    console.log(`Registro chiamate: ${utente.registroChiamate}`);
  }
  
  let utente1 = new Telefono(10, 0); // (credito di partenza, numero di chiamate)
  console.log('---Utente 1---');
  utente1.chiamata(2) // effettuo una chiamata virtuale da 2 minuti
  utente1.chiamata(20) // effettuo una chiamata virtuale da 2 minuti
  utente1.chiamata(20) // effettuo una chiamata virtuale da 2 minuti
  printData(utente1);

  let utente2 = new Telefono(5, 0); // (credito di partenza, numero di chiamate)
  console.log('---Utente 2---');
  utente2.ricarica(10) // effettua una ricarica di 20
  utente2.chiamata(2) // effettuo una chiamata virtuale da 2 minuti
  utente2.chiamata(20) // effettuo una chiamata virtuale da 20 minuti
  utente2.chiamata(10) // effettuo una chiamata virtuale da 10 minuti
  utente2.chiamata(10) // effettuo una chiamata virtuale da 10 minuti
  printData(utente2);

  let utente3 = new Telefono(5, 0); // (credito di partenza, numero di chiamate)
  console.log('---Utente 3---');
  utente3.chiamata(2) // effettuo una chiamata virtuale da 2 minuti
  utente3.ricarica(5) // effettua una ricarica di 20
  utente3.chiamata(20) // effettuo una chiamata virtuale da 20 minuti
  utente3.ricarica(5) // effettua una ricarica di 20
  utente3.chiamata(30) // effettuo una chiamata virtuale da 10 minuti
  utente3.chiamata(10) // effettuo una chiamata virtuale da 10 minuti
  printData(utente3);
  


