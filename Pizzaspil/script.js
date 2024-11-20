// Create the pizza cursor element
const pizzaCursor = document.createElement('div');
pizzaCursor.classList.add('pizza-cursor');
document.body.appendChild(pizzaCursor);

// Update cursor position
document.addEventListener('mousemove', (e) => {
    pizzaCursor.style.left = `${e.pageX+25}px`;
    pizzaCursor.style.top = `${e.pageY+25}px`;
});

const startScenario = {
    scenarioImage:'images/start.svg',
    text:'',
    option1:"",
    option2:"",
    option3:"",
    option4:"",
}
const scenario1 = {
    scenarioImage:'images/s1.jpg',
    text:'The night is dark and the streets of Pizzonia are almost empty. The bussteling city had fallen into it’s usual slumber. As you walk through the quiet streets you notice a dimly lit alleyway, with a peculiar looking creature, standing at the end of it... It was a rat holding a piece of pizza.',
    option1:"> Approach the rat",
    option2:"",
    option3:"",
    option4:"",
}
const scenario2 = {
    scenarioImage:'images/s2.png',
    text:'The rat sees you and introduces himself\n\n “Good evening, My name is Ratfael but most people usually call me Stuart. I’m gonna make you an offer you can’t refuse. I have studied the craft of pizza making for weeks. Would you like to buy one of my special Pizzas?”',
    option1:"> Accept his offer",
    option2:"",
    option3:"",
    option4:"",
}
const scenario3 = {
    scenarioImage:'images/s2.png',
    text:'“Great choice! Now let’s see if you’ve got good pizza taste or not… Which type of crust would you like?”\n\nYou’re presented with the following options:',
    option1:"> Classic",
    option2:"> Glutenfree",
    option3:"> Crisp",
    option4:"",
}
const scenario4 = {
    scenarioImage:'images/s2.png',
    text:'“Splendid choice! Now we arrive at the juiciest part, or should I say the sauciest one?”',
    option1:"> Tomato Sauce",
    option2:"> Garlic with a splash of oil",
    option3:"> Spicy Tomato Sauce",
    option4:"",
}
const scenario5 = {
    scenarioImage:'images/s2.png',
    text:'“Well well well... Now I need to know if you like meat or not. I do want to make the perfect pizza for you after all.”',
    option1:"> Vegetarian",
    option2:"> Is that even a question!!!",
    option3:"",
    option4:"",
}
const scenario61 = {
    scenarioImage:'images/s2.png',
    text:'Jeg har også hørt rygter om at grøntsager skulle være sunde. Jeg tror personligt ikke selv på det, men det må du selv om.',
    option1:"> Veggie Super (Ost, Champignon, Peberfrugt, Løg, Artiskokker, Oliven)",
    option2:"> Spinat (Ost, Spinat, Gorgonzola, Hvidløg)",
    option3:"",
    option4:"",
}
const scenario62 = {
    scenarioImage:'images/s2.png',
    text:'Godt valg! Det sunde valg! Hvilken type kød-pizza vil du have?',
    option1:"> BBQ KYLLING PIZZA (Ost, BBQ kylling, Ananas, Champignon, Karry)",
    option2:"> KØDBOMBEN (Bacon, Kylling, Kebab, Peperoni, Skinke)",
    option3:"> SANTA MARIA (Ost, Oksekød, Skinke, Bacon, Pølser)",
    option4:"> MARINARA (Ost, Tun, Rejer, Muslinger, Oliven)",
}
const scenario7 = {
    scenarioImage:'images/s2.png',
    text:'Det lyder fandme som en lækker pizza! En ',
    option1:"",
    option2:"",
    option3:"",
    option4:"",
}

let backgroundMusic = new Audio('audio/background-music.mp3');
let buttonSound = new Audio('audio/button.mp3');

let pizzabund = ""
let sauce = ""
let toppingType = ""
let topping = ""

let i = 0;
let typingSpeed = 25;

let currentScenario = startScenario;

updateCurrentScenario()

function start() {
    document.getElementById('start-button').remove();
    currentScenario = scenario1
    updateCurrentScenario()
    backgroundMusic.play();
}

function option1() {
    if (currentScenario == scenario1) {
        currentScenario = scenario2
    } else if (currentScenario == scenario2) {
        currentScenario = scenario3
    } else if (currentScenario == scenario3) {
        pizzabund = scenario3.option1.slice(2)
        currentScenario = scenario4
    } else if (currentScenario == scenario4) {
        sauce = scenario4.option1.slice(2)
        currentScenario = scenario5
    } else if (currentScenario == scenario5) {
        toppingType = "Vegetarian"
        currentScenario = scenario61
    } else if (currentScenario == scenario61) {
        topping = scenario61.option1.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    } else if (currentScenario == scenario62) {
        topping = scenario62.option1.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    }

    updateCurrentScenario()
    buttonSound.play();
}

function option2() {
    if (currentScenario == scenario3) {
        pizzabund = scenario3.option2.slice(2)
        currentScenario = scenario4
    } else if (currentScenario == scenario4) {
        sauce = scenario4.option2.slice(2)
        currentScenario = scenario5
    } else if (currentScenario == scenario5) {
        toppingType = "Meat"
        currentScenario = scenario62
    } else if (currentScenario == scenario61) {
        topping = scenario61.option2.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    } else if (currentScenario == scenario62) {
        topping = scenario62.option2.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    }

    updateCurrentScenario()
    buttonSound.play();
}

function option3() {
    if (currentScenario == scenario3) {
        pizzabund = scenario3.option3.slice(2)
        currentScenario = scenario4
    } else if (currentScenario == scenario4) {
        sauce = scenario4.option3.slice(2)
        currentScenario = scenario5
    } else if (currentScenario == scenario62) {
        topping = scenario62.option3.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    }

    updateCurrentScenario()
    buttonSound.play();
}

function option4() {
    if (currentScenario == scenario62) {
        topping = scenario62.option4.slice(2)
        currentScenario = scenario7
        scenario7.text = 'Det lyder fandme som en lækker pizza! En ' + pizzabund + ' pizzabund med ' + sauce + '. Godt valg med en ' + toppingType + ' pizza. Det lyder satme også frækt med ' + topping + '.'
    }

    updateCurrentScenario()
    buttonSound.play();
}

function updateCurrentScenario() {
    i = 0
    document.getElementById('overlay').style.display = "block";
    document.getElementById('paragraph').innerHTML = "";
    setTimeout(removeOverlay, 2000)
    
    function removeOverlay() {
        document.getElementById('overlay').style.display = "none";
        document.getElementById('overlay').style.opacity = "0";
        typeText()
        function typeText() {
            if (i < currentScenario.text.length) {
                document.getElementById('paragraph').innerHTML += currentScenario.text.charAt(i);
                i++;
                let typeTimeout = setTimeout(typeText, typingSpeed);
            }
        }
    }
    
    document.getElementById('myImage').src = currentScenario.scenarioImage;
    document.getElementById('option1').innerHTML = currentScenario.option1;
    document.getElementById('option2').innerHTML = currentScenario.option2;
    document.getElementById('option3').innerHTML = currentScenario.option3;
    document.getElementById('option4').innerHTML = currentScenario.option4;
}

