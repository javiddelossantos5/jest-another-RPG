const Potion = require('../lib/Potion');
// const player = new Player('Jane');
const Character = require('../lib/Character');

// player.getStats();
// player.getInventory();

 //inherit prototype methods from Character here:
class Player extends Character {
    constructor(name = '') {
        //call parent constructor here:
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }
    
    //returns an object with various player properties
   getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        } else {
            return false;
        };
    }

    //adds the potion into the inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    //returns a player using a potion and new inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
};

module.exports = Player;