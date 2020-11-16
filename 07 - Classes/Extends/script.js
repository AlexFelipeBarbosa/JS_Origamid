/* SubClasses
É possivel criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
*/
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log("Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2);
honda.empinar();

const civic = new Veiculo(4);
civic.acelerar();

/* Super
É possivel utilizar a palavra super para falarmos com a classe pai e acessarmos os seus métodos e propriedades
*/
class Moto2 extends Veiculo {
  acelerar() {
    super.acelerar();
    console.log("Muito");
  }
}

const honda2 = new Moto2(2);
console.log(honda2);

/* Super e Constructor
Podemos utilizar o super para estendermos o método constructor.
*/
class Veiculo2 {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto3 extends Veiculo2 {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}

const honda3 = new Moto3(2, "Gasolina", true);
console.log(honda3);
