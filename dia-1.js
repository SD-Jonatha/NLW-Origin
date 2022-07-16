class Carro {
  static alerta = true;
  constructor(marca, modelo, cor = "preto") {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ligado = false;
    this.km = 0;
    this.comb = 10;
  }

  info() {
    console.log(
      "cor: " + this.cor + ", marca: " + this.marca + ", modelo: " + this.modelo
    );
    console.log("Ligado: " + (this.ligado ? "sim" : "Não"));
    console.log("km: " + this.km);
    console.log("Combustível: " + this.comb);
  }

  ligar() {
    this.ligado = true;
  }

  desligar() {
    this.ligar = false;
  }

  set setComb(v) {
    if (v < 0 || v > 100) {
      alert("Limite ivalido");
    }
    this.comb = v;
    console.log(`Combustível alterado, valor atual ${v}`);
  }
  get getComb() {
    return this.comb;
  }
}

const atleta = new Carro("Ford", "ka");
atleta.setComb = 100;
atleta.ligar();
atleta.info();
console.log(atleta.getComb);
