class Cliente {
  private _codigo: number;
  private _nombre: string;
  private _direccion: Direccion;
  private _cuentas: Array<Cuenta>;

  constructor(codigo: number, nombre: string, direccion: Direccion) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._direccion = direccion;
  }
  /*_codigo*/
  get codigo(): number {
    return this._codigo;
  }

  set codigo(codigo: number) {
    this._codigo = codigo;
  }
  /*_nombre*/
  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  /*_direccion*/
  get direccion(): Direccion {
    return this._direccion;
  }

  set direccion(direccion: Direccion) {
    this._direccion = direccion;
  }
  /*_cuentas*/
  get cuentas(): Array<Cuenta> {
    return this._cuentas;
  }

  set cuentas(cuentas: Array<Cuenta>) {
    this._cuentas = cuentas;
  }
}