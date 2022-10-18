class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

var s1 = new Smartphone("iPhone", "Preto", "12 Pro Max");

//Chamando o método ligar da classe Dispositivo
s1.ligar();
s1.ligar();
//Chamando o método desligar da classe Dispositivo
s1.desligar();
s1.desligar();
