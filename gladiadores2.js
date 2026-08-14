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
    name;
    vida;
    ataque;
    stamina;

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

    getStamina(){
        this.stamina = stamina <= 0 ? 0: stamina;
    }

    setStamina(stamina){
        this.stamina = stamina <= 0 ? 0: stamina;
        if(!this.stamina){
            console.log(`${this.getName()} se ha quedado sin stamina!`)
        }
    }

    atacar(victima){
        const staminaResultante = this.getStamina() - this.getAtaque();
        const vidaResultante = victima.getVida() - this.getAtaque();
        if(staminaResultante >= 0){
            victima.setVida(vidaResultante);
            this.setStamina(staminaResultante);
        }
    }

    meAtaca(atacante){
        super.setVida(super.getVida() - atacante.getAtaque())
    }

}

class Guerrero extends Luchador {

    defensa;

    constructor(vida, ataque, stamina, defensa){
        super(vida, ataque, stamina)
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

class Asesino extends Luchador {

    dañoVeneno;
    constructor(vida, ataque, stamina, dañoVeneno){
        super(vida, ataque, stamina)
        this.dañoVeneno = dañoVeneno;
    }

    getAtaque(){
        super.getAtaque() + this.dañoVeneno;
    }

}

class UsuarioDeMana extends Luchador{

    mana;

    getMana(){
        return this.mana;
    }

    setMana(mana){
       this.mana = mana <= 0 ? 0: mana;
        if(!this.mana){
            console.log(`${this.getName()} se ha quedado sin mana!`)
        }
    }

    constructor(vida, ataque, stamina, mana){
        super(vida, ataque, stamina)
        this.mana = mana;
    }

    curar(vidaCurar){
        super.setVida(super.getVida + vidaCurar)
    }

    atacar(victima){
        const manaResultante = this.getMana() - this.getAtaque();
        const vidaResultante = victima.getVida() - this.getAtaque();
        if(manaResultante >= 0){
            victima.setVida(vidaResultante);
            this.setMana(manaResultante);
        }
    }
}

class Mago extends Luchador{

    dañoBolaDeFuego;

    constructor(vida, ataque, stamina, dañoBolaDeFuego, mana){
        super(vida, ataque, stamina, mana)
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

class Curandero extends Luchador{

    constructor(vida, ataque, stamina, mana){
        super(vida, ataque, stamina, mana)
    }

    curar(vidaCurar){
        super.curar(vidaCurar + 100);
    }
}