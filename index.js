class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        if (this.type === "mago"){
            console.log(`O ${this.name} com idade de ${this.age} anos, ${this.type}, atacou usando magia`)
        } else if(this.type === "guerreiro"){
            console.log(`O ${this.name} com idade de ${this.age} anos, ${this.type}, atacou usando espada`)
        } else if (this.type === "monge"){
            console.log(`O ${this.name} com idade de ${this.age} anos, ${this.type}, atacou usando artes marciais`)
        } else if (this.type === "ninja"){
            console.log(`A ${this.name} com idade de ${this.age} anos, ${this.type}, atacou usando Shuriken`)
        }
    }
}
let mago = new hero("Leo", 25, "mago");
let guerreiro = new hero("Loli", 20, "guerreiro")
let monge = new hero("Enry", 30, "monge")
let ninja = new hero("Laly", 31, "ninja")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack() 

