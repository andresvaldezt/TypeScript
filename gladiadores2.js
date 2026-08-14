//Ejercicio para aprender ES6 y TS
//Simulador de peleas con 4 tipos de luchadores:
/**
 * Existen cuatro tipos de personajes: guerreros, asesinos, magos y curanderos.
 * Los guerreros tienen: mucha vida, daño físico intermedio y poca stamina.
 * Los asesinos tienen: poca vida, gran daño físico y stamina intermedia.
 * Los magos tienen: poca vida, gran daño mágico y poca stamina.
 * Los curanderos tienen: poca vida, poco daño y poca stamina.
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
    vida;
    ataque;
    stamina;

    getVida(){
        return this.vida;
    }

    setVida(vida){
        if(vida < 0){
            this.vida = 0
        }else{
            this.vida = vida;
        }
        
    }

    getAtaque(){
        return this.ataque;
    }

    setAtaque(ataque){
        this.ataque = ataque;
    }

    getStamina(){
        return this.stamina;
    }

    setStamina(stamina){
        this.stamina = stamina;
    }

    atacar(victima){
        const vidaResultante = victima.getVida() - this.getAtaque;
        victima.setVida(vidaResultante);
        victima.setVida(0);
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

    constructor(vida, ataque, stamina, mana){
        super(vida, ataque, stamina)
        this.mana = mana;
    }

    curar(vidaCurar){
        super.setVida(super.getVida + vidaCurar)
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