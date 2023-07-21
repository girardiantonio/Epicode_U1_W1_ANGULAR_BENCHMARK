"use strict";
class Telefono {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = 0.20;
    }
    ricarica(euro) {
        this.credito += euro;
    }
    numero404() {
        return (this.numeroChiamate * this.costoMinuto).toFixed(0);
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        // effettua una chiamata virtualmente
        let costoChiamata = min * this.costoMinuto;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log('Credito insufficiente per effettuare la chiamata');
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
function printData(utente) {
    console.log("Credito di partenza:", utente.credito);
    console.log(`Utente effettua n. chiamate: ${utente.getNumeroChiamate()}`);
    console.log(`Credito residuo è: ${utente.numero404()} €`);
    utente.azzeraChiamate();
    console.log(`Credito residuo dopo azzeraChiamate: ${utente.numero404()} €`);
}
let utente1 = new Telefono(10, 2); // (credito di partenza, numero di chiamate)
console.log('---Utente 1---');
printData(utente1);
