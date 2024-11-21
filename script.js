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
    scenarioImage:'images/start.png',
    text:'',
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const scenario1 = {
    scenarioImage:'images/s1.png',
    text:'The night is dark and the streets of Pizzonia are almost empty. The bussteling city had fallen into it’s usual slumber. As you walk through the quiet streets you notice a dimly lit alleyway, with a peculiar looking creature, standing at the end of it... It was a rat holding a piece of pizza.',
    option1:"> Approach the rat",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const scenario2 = {
    scenarioImage:'images/s2.png',
    text:'The rat sees you and introduces himself\n\n “Good evening, My name is Ratfael but most people usually call me Stuart. I’m gonna make you an offer you can’t refuse. I have studied the craft of pizza making for weeks. Would you like to buy one of my special Pizzas?”',
    option1:"> Accept his offer",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const scenario3 = {
    scenarioImage:'images/s3.png',
    text:'“Great choice! Now let’s see if you’ve got good pizza taste or not… Which type of crust would you like?”\n\nYou’re presented with the following options:',
    option1:"> Classic",
    option2:"> Glutenfree",
    option3:"> Crisp",
    option4:"",
    sound:"",
}
const scenario4 = {
    scenarioImage:'images/s4.png',
    text:'“Splendid choice! Now we arrive at the juiciest part, or should I say the sauciest one?”',
    option1:"> Tomato Sauce",
    option2:"> Garlic with a splash of oil",
    option3:"> Spicy Tomato Sauce",
    option4:"",
    sound:"",
}
const scenario5 = {
    scenarioImage:'images/s5.png',
    text:'“Well well well... Now I need to know if you like meat or not. I do want to make the perfect pizza for you after all.”',
    option1:"> Vegetarian",
    option2:"> Is that even a question!? Meat all the way!",
    option3:"",
    option4:"",
    sound:"",
}
const scenario61 = {
    scenarioImage:'images/s61.png',
    text:'“I’ve also heard rumors that vegetables are supposed to be healthy. Personally, I don’t buy it, but hey, that’s your choice.“',
    option1:"> Veggie Super (Cheese, Mushrooms, Bell Peppers, Onions, Artichokes, Olives)",
    option2:"> Spinach (Cheese, Spinach, Gorgonzola, Garlic)",
    option3:"",
    option4:"",
    sound:"",
}
const scenario62 = {
    scenarioImage:'images/s62.png',
    text:'“Ah, great choice! The healthy choice, eh? But c’mon, let’s not kid ourselves—you came here for the meat, didn’t you? I got the good stuff, don’t worry! Let’s load you up proper!“',
    option1:"> BBQ CHICKEN PIZZA (Cheese, BBQ Chicken, Pineapple, Mushrooms, Curry)",
    option2:"> THE MEAT BOMB (Bacon, Chicken, Kebab, Pepperoni, Ham)",
    option3:"> SANTA MARIA (Cheese, Beef, Ham, Bacon, Sausages)",
    option4:"> MARINARA (Cheese, Tuna, Shrimp, Clams, Olives)",
    sound:"",
}
const scenario7 = {
    scenarioImage:'images/s7.png',
    text:'',
    option1:"> Continue",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const scenario8 = {
    scenarioImage:'images/s8.png',
    text:'“Now hand over the money pipsqeak!”',
    option1:"> Pay Ratfael",
    option2:"> Your are not getting a dime from me, you sleezy rat!",
    option3:"",
    option4:"",
    sound:"",
}
const scenario91 = {
    scenarioImage:'images/s91.png',
    text:'“A pleasure doing business with you. Your pizza will be ready in 10 minutes.”',
    option1:"> Wait for the pizza",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const scenario92 = {
    scenarioImage:'images/s92.png',
    text:'“Trying to be cool now ey? You are gonna regret that!” Ratfaels eyes roll into the back of his head and his mouth began to widen. Something started to move underneath his skin. The creature trapped inside this coffin of flesh was trying to get out. It slowly ripped his body apart from the inside. Where Ratfael once stood, there was now a beast with tentacles for eyes and a mouth full of eyeballs all starring directly at me.',
    option1:"> Escape from Pizzonia",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const endScenario1 = {
    scenarioImage:'images/ends1.png',
    text:'',
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}
const endScenario2 = {
    scenarioImage:'images/ends2.png',
    text:'',
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    sound:"",
}

let backgroundMusic = new Audio('audio/background-music.mp3')
let badEndingMusic = new Audio('audio/bad-ending.mp3')
let buttonSound = new Audio('audio/button.mp3')
let scenarioSound = new Audio('')

let pizzabund = ""
let sauce = ""
let toppingType = ""
let topping = ""

let i = 0
let typingSpeed = 25
let enableButton = true

let currentScenario = startScenario

updateCurrentScenario()

function start() {
    document.getElementById('start-button').style.display = "none";
    currentScenario = scenario1
    updateCurrentScenario()
    backgroundMusic.currentTime = 0
    backgroundMusic.play()
}

function option1() {
    if (enableButton & currentScenario.option1 != "") {
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
            scenario7Text()
        } else if (currentScenario == scenario62) {
            topping = scenario62.option1.slice(2)
            currentScenario = scenario7
            scenario7Text()
        } else if (currentScenario == scenario7) {
            currentScenario = scenario8
        } else if (currentScenario == scenario8) {
            currentScenario = scenario91
        } else if (currentScenario == scenario91) {
            currentScenario = endScenario1
        } else if (currentScenario == scenario92) {
            currentScenario = endScenario2
        } 
        
        updateCurrentScenario()
        buttonSound.play()
    }
}

function option2() {
    if (enableButton & currentScenario.option2 != "") {
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
            scenario7Text()
        } else if (currentScenario == scenario62) {
            topping = scenario62.option2.slice(2)
            currentScenario = scenario7
            scenario7Text()
        } else if (currentScenario == scenario8) {
            currentScenario = scenario92
            backgroundMusic.pause()
            badEndingMusic.play()
        }

        updateCurrentScenario()
        buttonSound.play()
    }
}

function option3() {
    if (enableButton & currentScenario.option3 != "") {
        if (currentScenario == scenario3) {
            pizzabund = scenario3.option3.slice(2)
            currentScenario = scenario4
        } else if (currentScenario == scenario4) {
            sauce = scenario4.option3.slice(2)
            currentScenario = scenario5
        } else if (currentScenario == scenario62) {
            topping = scenario62.option3.slice(2)
            currentScenario = scenario7
            scenario7Text()
        }

        updateCurrentScenario()
        buttonSound.play()
    }
}

function option4() {
    if (enableButton & currentScenario.option4 != "") {
        if (currentScenario == scenario62) {
            topping = scenario62.option4.slice(2)
            currentScenario = scenario7
            scenario7Text()
        }

        updateCurrentScenario()
        buttonSound.play()  
    }
}

function updateCurrentScenario() {
    enableButton = false
    i = 0
    scenarioSound = new Audio(currentScenario.sound)
    scenarioSound.currentTime = 0
    scenarioSound.play()
    document.getElementById('overlay').style.display = "block";
    document.getElementById('paragraph').innerHTML = "";
    document.getElementById('option1').innerHTML = "";
    document.getElementById('option2').innerHTML = "";
    document.getElementById('option3').innerHTML = "";
    document.getElementById('option4').innerHTML = "";
    setTimeout(removeOverlay, 2000)
    
    function removeOverlay() {
        document.getElementById('overlay').style.display = "none";
        document.getElementById('overlay').style.opacity = "0";
        typeText()
        function typeText() {
            if (i < currentScenario.text.length) {
                document.getElementById('paragraph').innerHTML += currentScenario.text.charAt(i)
                i++
                let typeTimeout = setTimeout(typeText, typingSpeed)
            } else {
                enableButton = true
                document.getElementById('paragraph').innerHTML = currentScenario.text
                document.getElementById('option1').innerHTML = currentScenario.option1
                document.getElementById('option2').innerHTML = currentScenario.option2
                document.getElementById('option3').innerHTML = currentScenario.option3
                document.getElementById('option4').innerHTML = currentScenario.option4
            }
        }
    }
    if (currentScenario == endScenario1 | currentScenario == endScenario2) {
        if (currentScenario == endScenario1) {
            document.getElementById('image-overlay').src = currentScenario.scenarioImage
            document.getElementById('image-overlay-container').style.display = "block"
        } else if (currentScenario == endScenario2) {
            document.getElementById('image-overlay').src = currentScenario.scenarioImage
            document.getElementById('image-overlay-container').style.display = "block"
        }
        setTimeout(restart, 5000)
        function restart() {
            pizzabund = ""
            sauce = ""
            toppingType = ""
            topping = ""

            i = 0
            enableButton = true

            currentScenario = startScenario
            document.getElementById('image-overlay-container').style.display = "none"
            document.getElementById('start-button').style.display = "flex"
            backgroundMusic.pause()
            badEndingMusic.pause()
            updateCurrentScenario()
        }
    }
    document.getElementById('screen-image').src = currentScenario.scenarioImage;
}

function scenario7Text() {
    scenario7.text = '“That sounds like one hell of a delicious pizza! A ' + pizzabund + ' base with ' + sauce + '. Great choice going for a ' + toppingType + ' pizza. And that ' + topping + ' — now that sounds downright naughty!”'
}

// skip text animation
function skip() {
    i = currentScenario.text.length
}

// change theme button
const standardTheme = {
    bgColor:'black',
    color:'white',
}
const lightTheme = {
    bgColor:'#f4ecd8',
    color:'black',
}
const pinkTheme = {
    bgColor:'pink',
    color:'white',
}

let theme = standardTheme

function changeTheme() {
    if (theme == standardTheme) {
        theme = lightTheme    
    } else if (theme == lightTheme) {
        theme = pinkTheme
    } else if (theme == pinkTheme) {
        theme = standardTheme
    }
    document.getElementById('game-viewport').style.backgroundColor = theme.bgColor
    document.getElementById('game-viewport').style.color = theme.color
}

// mute
let isMuted = false

function mute() {
    if (isMuted == false) {
        isMuted = true
        backgroundMusic.muted = true
        badEndingMusic.muted = true
        buttonSound.muted = true
        document.getElementById('mute-button-image').src = "images/mute.svg"
    } else if (isMuted) {
        isMuted = false
        backgroundMusic.muted = false
        badEndingMusic.muted = false
        buttonSound.muted = false
        document.getElementById('mute-button-image').src = "images/unmute.svg"
    }
}

// dropdown menu
let isDropdownExpanded = false

function dropdown() {
    if (isDropdownExpanded == false) {
        isDropdownExpanded = true
        document.getElementById('dropdown-content').style.display = "block"
        document.getElementById('dropdown-image').style.transform = "rotateX(180deg)"
    } else if (isDropdownExpanded) {
        isDropdownExpanded = false
        document.getElementById('dropdown-content').style.display = "none"
        document.getElementById('dropdown-image').style.transform = "none"
    }
}