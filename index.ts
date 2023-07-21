interface smartphone {
    credito: number;
    numeroChiamate: number;
    costoMinuto: number

    ricarica(euro: number): void;
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min:number):void
    azzeraChiamate(): void;
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

    public ricarica(euro: number): void {
        this.credito += euro
    }

    public numero404(): string {
        return (Math.round(this.credito * 100) /100).toFixed(0)
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

        numero404()
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}

function printData(utente: Telefono): void {
    console.log("Credito di partenza:", utente.credito);
    console.log(`Utente effettua n. chiamate: ${utente.getNumeroChiamate()}`);
    console.log(`Credito residuo è: ${utente.numero404()} €`);
    utente.azzeraChiamate();
    console.log(`Credito residuo dopo azzeraChiamate: ${utente.numero404()} €`);
  }
  
  let utente1 = new Telefono(10, 2); // (credito di partenza, numero di chiamate)
  console.log('---Utente 1---');
  printData(utente1);
  


