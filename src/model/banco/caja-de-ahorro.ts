import { Cuenta } from "./cuenta";
export class CajaDeAhorro extends Cuenta {
  private _interes: number;

  constructor(numero: number, saldo: number, moneda: string, interes: number) {
    super(numero, saldo, moneda);
    this._interes = interes;
  }
  /*_interes*/
  get interes(): number {
    return this._interes;
  }

  set interes(interes: number) {
    this._interes = interes;
  }

  aplicarInteres() {
    return (this._saldo*this._saldo);
  }
}