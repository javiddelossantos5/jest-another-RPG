//combining player.js and enemy.js so aa better practice of dry code
class Character {
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }
    //checks if players are alive
    isAlive() {
        if (this.health === 0) {
            return false;
        } else {
            return true;
        }
    }
    

    //tells you how much health you got left
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    //random number that decides how much your attack will be
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }
};

// console.log(new Character().getHealth());

module.exports = Character;