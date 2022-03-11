const ANIMALS_TYPES = {
    LION: 'lion',
    ZEBRA: 'zebra',
    HIPPOPOTAMUS: 'hippopotamus',
    GIRAFFE: 'giraffe',
}

class AnimalFactory {

    create = (options) => {
        const type = options.type
        if (!type) {
            return "This animal is not been created yet"
        }

        let animal;


        if (type === "lion") {
            animal = new Lion(options);
        } else if (type === "giraffe") {
            animal = new Giraffe(options);
        } else if (type === "hippopotamus") {
            animal = new Hippopotamus(options);
        } else if (type === "zebra") {
            animal = new Zebra(options);
        } else {
            return "This animal is not been created yet"
        }

        return animal
    }

};


class Animal {
    constructor({ name, type }) {
        this.name = name;
        this.type = type;
    }

    speak(phrase = '') {
        const words = phrase.split(' ')
        const phraseWithSound = words.join(` ${this.sound} `)
        return !phrase ? this.sound : phraseWithSound
    }

}

class Lion extends Animal {
    constructor(...args) {
        super(...args)
        this.sound = 'roar'
    }
    //differents behaviors

}

class Zebra extends Animal {
    constructor(...args) {
        super(...args)
        this.sound = 'brrruuu'
    }
    //differents behaviors

}

class Giraffe extends Animal {
    constructor(...args) {
        super(...args)
        this.sound = 'grom'
    }
    //differents behaviors

}

class Hippopotamus extends Animal {
    constructor(...args) {
        super(...args)
        this.sound = 'brom'
    }
    //differents behaviors

}

let animalsTemplates = [{ name: 'Alex', type: ANIMALS_TYPES.LION }, { name: 'Marty', type: ANIMALS_TYPES.ZEBRA }, { name: 'Melman', type: ANIMALS_TYPES.GIRAFFE }, { name: 'Gloria', type: ANIMALS_TYPES.HIPPOPOTAMUS }]

let animals = []
const animalFactory = new AnimalFactory()
animalsTemplates.forEach(e => {
    const animal = animalFactory.create(e)
    animals.push(animal)
})

const animalsImages = document.querySelectorAll('img[data-animal-type]')
animalsImages.forEach(e => e.addEventListener('click', function (event) {
    const type = event.target.getAttribute('data-animal-type');
    const animal = animals.find(e => type === e.type)
    const phrase = document.getElementById('speak_words').value
    const animalPhrase = animal.speak(phrase)
    print(animalPhrase)
}))


function print(str) {
    const paragraph_print = document.getElementById('paragraph_print')
    paragraph_print.textContent = str
}
