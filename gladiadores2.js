//Ejercicio para aprender ES6 y TS
//Simulador de peleas con 4 tipos de luchadores:
/**
 * Existen cuatro tipos de personajes: guerreros, asesinos, magos y curanderos.
 * Los guerreros tienen: mucha vida, daño físico intermedio y poca stamina.
 * Los asesinos tienen: poca vida, gran daño físico y stamina intermedia.
 * Los magos tienen: poca vida, gran daño mágico y gran mana.
 * Los curanderos tienen: poca vida, poco daño y poca mana.
 * 
 * Los guerreros tienen un bonus de defensa a sus cualidades de vida.
 * Los asesinos aplican veneno con sus ataques, potenciando su daño.
 * Los magos pueden hacer daño con sus bolas de fuego y pueden curarse un poco.
 * Los curanderos pueden curar en grandes proporciones, pero tienen muy poco daño.
 * 
 * Estos personajes utilizan stamina y mana para realizar sus ataques según su tipo,
 * sin estos recursos no pueden atacar.
 * A cada ataque se le descontará la defensa del que lo recibe y y eso influirá en sus puntos de vida.
 * 
 * Debes realizar un simulador de peleas, donde tendrán listas de personajes,
 * cada uno de un tipo y cualidades diferentes, de manera random estos atacaran o utilizaran habilidades para decidir un ganador.
 * 
 */

class Luchador {

    constructor(name, vida, ataque){
        this.name = name;
        this.vida = vida;
        this.ataque = ataque;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getVida(){
        return this.vida;
    }

    setVida(vida){
        this.vida = vida <= 0 ? 0: vida;
        if(!this.vida){
            console.log(`${this.getName()} ha muerto!`)
        }
    }

    getAtaque(){
        return this.ataque;
    }

    setAtaque(ataque){
        this.ataque = ataque;
    }

    meAtaca(atacante){
        super.setVida(super.getVida() - atacante.getAtaque())
    }
}

class UsuarioDeStamina extends Luchador{

    constructor(name, vida, ataque, stamina){
        super(name, vida, ataque, stamina);
        this.stamina = stamina;
    }

    getStamina(){
        return this.stamina;
    }

    setStamina(stamina){
        this.stamina = stamina <= 0 ? 0: stamina;
        if(!this.stamina){
            console.log(`${this.getName()} se ha quedado sin stamina!`)
        }
    }

    atacar(victima){
        const staminaResultante = this.getStamina() - super.getAtaque();
        console.log(`${this.name} le quedan ${staminaResultante} de Stamina`)
        const vidaResultante = victima.getVida() - super.getAtaque();
        console.log(`Victima: ${victima.name}`)
        if(staminaResultante >= 0){
            console.log('Ataque realizado')
            victima.setVida(vidaResultante);
            this.setStamina(staminaResultante);
        }
    }
}

class Guerrero extends UsuarioDeStamina {


    constructor(name, vida, ataque, stamina, defensa){
        super(name, vida, ataque, stamina)
        this.defensa = defensa;
    }

    getDefensa(){
        return this.defensa;
    }

    setDefensa(defensa){
        this.defensa = defensa;
    }

    getVida(){
        super.getVida() + this.defensa;
    }
}

class Asesino extends UsuarioDeStamina {

    constructor(name, vida, ataque, stamina, dañoVeneno){
        super(name, vida, ataque, stamina)
        this.dañoVeneno = dañoVeneno;
    }

    getAtaque(){
        super.getAtaque() + this.dañoVeneno;
    }

}

class UsuarioDeMana extends Luchador{

    constructor(name, vida, ataque, stamina, mana){
        super(name, vida, ataque, stamina)
        this.mana = mana;
    }

    getMana(){
        return this.mana;
    }

    setMana(mana){
       this.mana = mana <= 0 ? 0: mana;
        if(!this.mana){
            console.log(`${this.getName()} se ha quedado sin mana!`)
        }
    }

    curar(vidaCurar){
        super.setVida(super.getVida + vidaCurar)
    }

    atacar(victima){
        const manaResultante = this.getMana() - super.getAtaque();
        console.log(`${this.name} le quedan ${manaResultante} de Mana`)
        const vidaResultante = victima.getVida() - super.getAtaque();
        console.log(`Victima: ${victima.name}`)
        if(manaResultante >= 0){
            console.log('Ataque realizado')
            victima.setVida(vidaResultante);
            this.setMana(manaResultante);
        }
    }
}

class Mago extends UsuarioDeMana{

    constructor(name, vida, ataque, dañoBolaDeFuego, mana){
        super(name, vida, ataque, mana)
        this.dañoBolaDeFuego = dañoBolaDeFuego;
        this.mana = mana;
    }

    getAtaque(){
        super.getAtaque() + this.dañoBolaDeFuego;
    }

    curar(){
        super.setVida(super.getVida() + 20);
    }
}

class Curandero extends UsuarioDeMana{

    constructor(name, vida, ataque, mana){
        super(name, vida, ataque, mana)
    }

    curar(vidaCurar){
        super.curar(vidaCurar + 100);
    }
}

const mago = new Mago('Veigar', 200, 100, 1000, 1000)
const guerrero = new Guerrero()
const asesino = new Asesino('Talon', 200, 600, 1000, 200)
const curandero = new Curandero()

mago.atacar(asesino);