export class Direccion {
  private _pais: string;
  private _ciudad: string;
  private _calle: string;

  constructor(pais: string, ciudad: string, calle: string) {
    this._pais = pais;
    this._ciudad = ciudad;
    this._calle = calle;
  }
  /*_pais*/
  get pais(): string {
    return this._pais;
  }

  set pais(pais: string) {
    this._pais = pais;
  }

    /*_ciudad */
  get ciudad(): string {
    return this._ciudad;
  }

  set ciudad(ciudad: string) {
    this._ciudad = ciudad;
  }

    /*_calle*/
  get calle(): string {
    return this._calle;
  }

  set calle(calle: string) {
    this._calle = calle;
  }
}