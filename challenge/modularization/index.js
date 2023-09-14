const Tiger = require("./Tiger") // TODO 3
const Wolf = require("./Wolf") // TODO 4

const fighting = (tiger, wolf) => {
    console.log("Tiger:", tiger.strength, "Wolf:", wolf.strength)
    if(tiger.strength > wolf.strength) {
        tiger.growl()
        return
    } else if (tiger.strength < wolf.strength) {
        wolf.howl()
        return
    }

    console.log("Tiger and Wolf have same strength") 
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting (tiger, wolf)