export abstract class Animal {
  private _nombre: string;

  protected constructor(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  public mover(distancia: number = 0) {
    console.log(`${this._nombre} se movio ${distancia}m.`);
  }

}