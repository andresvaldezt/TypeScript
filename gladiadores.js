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


class Character{
    health;
    attackDmg;
    magicDmg;
    attackDef;
    magicDef;

    getHealth(){
        return this.health;
    }

    setHealth(health){
        this.health = health <= 0 ? 0 : health;
    }

    getAttackDmg(){
        return this.attackDmg;
    }

    setAttackDmg(attackDmg){
        this.attackDmg = attackDmg;
    }

    getMagicDmg(){
        return this.magicDmg;
    }

    setMagicDmg(magicDmg){
        this.magicDmg = magicDmg;
    }

    getAttackDef(){
        return this.attackDef;
    }

    setAttackDef(attackDef){
        this.attackDef = attackDef;
    }

    getMagicDef(){
        return this.magicDef;
    }

    setMagicDef(magicDef){
        this.magicDef = magicDef;
    }

    attackDmgTarget(target){
        const currentHealth = target.getHealth() - (this.getAttackDmg() - this.getAttackDef());
        target.setHealth(currentHealth);

        const currentStamina = this.getStamina() - this.getAttackCost();
        setStamina(currentStamina);
    }

    magicDmgTarget(target){
        const currentHealth = target.getHealth() - (this.getMagicDmg() - this.getMagicDef());
        target.setHealth(currentHealth);

        const currentMana = this.getMana() - this.getSpellCost();
        setMana(currentMana);
    }

}

class AttackUser extends Character{
    stamina;
    attackCost;

    constructor(health, attackDmg, magicDmg, attackDef, magicDef, shield, stamina, attackCost){
        super(health, attackDmg, magicDmg, attackDef, magicDef);
        this.stamina = stamina;
        this.attackCost = attackCost;
    }

    getStamina(){
        return this.stamina;
    }

    setStamina(stamina){
        this.stamina = stamina <= 0 ? 0 : stamina;
    }

    getAttackCost(){
        return this.attackCost;
    }

    setAttackCost(attackCost){
        this.attackCost = attackCost;
    }

}

class Warrior extends AttackUser {
    shield;
    
    constructor(health, stamina, attackDmg, magicDmg, attackDef, magicDef, shield){
        super(health, stamina, attackDmg, magicDmg, attackDef, magicDef, attackCost);
        this.shield = shield;
    }

    getShield(){
        return this.shield;
    }

    setShield(shield){
        this.shield = shield;
    }

    getHealth(){
        super.getHealth() + this.shield;
    }

}

class Assassin extends AttackUser {
    poisonDmg;

    constructor(health, attackDmg, magicDmg, attackDef, magicDef, poisonDmg, stamina){
        super(health, attackDmg, magicDmg, attackDef, magicDef, stamina, attackCost);
        this.poisonDmg = poisonDmg;
    }

    getAttackDmg() {
        super.getAttackDmg = this.attackDmg + this.poisonDmg;
    }

}
//////////////////////////////////////////////////////////
class SpellUser extends Character{
    mana;
    spellCost;

    constructor(health, attackDmg, magicDmg, attackDef, magicDef, mana, spellCost){
        super(health, attackDmg, magicDmg, attackDef, magicDef);
        this.mana = mana;
        this.spellCost = spellCost;
    }

    getMana(){
        return this.mana;
    }

    setMana(mana){
        this.mana = mana <= 0 ? 0 : mana;
    }

    healing(healPoints){
        super.getHealth(super.getHealth() + healPoints);
    }

    getSpellCost(spellCost){
        this.spellCost = spellCost;
    }

}

class Mage extends SpellUser {
    fireball;

    constructor(health, attackDmg, magicDmg, attackDef, magicDef, mana){
        super(health, attackDmg, magicDmg, attackDef, magicDef, mana);
    }

    getMagicDmg(){
        super.getMagicDmg() + this.fireBall;
    }

}

class Healer extends SpellUser {

    constructor(health, attackDmg, magicDmg, attackDef, magicDef, healing, mana){
        super(health, attackDmg, magicDmg, attackDef, magicDef, mana);
    }
    
    healing(healPoints){
        super.healing(healPoints * 2)
    }
}