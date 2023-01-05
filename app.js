const imagesObj = {
    big: "./images/features/img1.png", small: "./images/features/img2.png", long: "./images/features/img3.png", longnose: "./images/features/img4.png", longears: "./images/features/img5.png",
    cute: "./images/features/img6.png", scary: "./images/features/img7.png", brown: "./images/features/img8.png", white: "./images/features/img9.png", black: "./images/features/img10.png",
    blackandwhite: "./images/features/img11.png", yellow: "./images/features/img12.png", yellowandblack: "./images/features/img13.png", orange: "./images/features/img14.png", 
    pink: "./images/features/img27.png", fast: "./images/features/img15.png", hot: "./images/features/img16.png", cold: "./images/features/img17.png", mountain: "./images/features/img18.png", 
    savanna: "./images/features/img19.png", house: "./images/features/img20.png", hard: "./images/features/img21.png", jump: "./images/features/img22.png", fly: "./images/features/img23.png", 
    banana: "./images/features/img24.png", cheese: "./images/features/img25.png", milk: "./images/features/img26.png"
}
const animalImagesObj = {
    "bear": "./images/animals/img1.png", "polar bear": "./images/animals/img2.png",
    "elephant": "./images/animals/img3.png", "tiger": "./images/animals/img4.png",
    "lion": "./images/animals/img5.png", "zebra": "./images/animals/img6.png",
    "gorilla": "./images/animals/img7.png", "monkey": "./images/animals/img8.png",
    "horse": "./images/animals/img9.png", "camel": "./images/animals/img10.png",
    "cow": "./images/animals/img11.png", "sheep": "./images/animals/img12.png",
    "pig": "./images/animals/img13.png", "panda": "./images/animals/img14.png",
    "koala": "./images/animals/img15.png", "penguin": "./images/animals/img16.png",
    "dog": "./images/animals/img17.png", "cat": "./images/animals/img18.png",
    "rabbit": "./images/animals/img19.png", "mouse": "./images/animals/img20.png",
    "snake": "./images/animals/img21.png", "frog": "./images/animals/img22.png",
    "bird": "./images/animals/img23.png", "fox": "./images/animals/img24.png",
    "turtle": "./images/animals/img25.png"
}


const mainObj = {
    "bear": [imagesObj.big,imagesObj.brown,imagesObj.mountain,"./images/animals/img1.png"], "polar bear": [imagesObj.big,imagesObj.white,imagesObj.cold,"./images/animals/img2.png"],
    "elephant": [imagesObj.big,imagesObj.longnose,imagesObj.savanna,"./images/animals/img3.png"], "tiger": [imagesObj.big,imagesObj.yellowandblack,imagesObj.scary,"./images/animals/img4.png"],
    "lion": [imagesObj.big,imagesObj.yellow,imagesObj.scary,"./images/animals/img5.png"], "zebra": [imagesObj.big,imagesObj.blackandwhite,imagesObj.savanna,"./images/animals/img6.png"],
    "gorilla": [imagesObj.big,imagesObj.scary,imagesObj.mountain,"./images/animals/img7.png"], "monkey": [imagesObj.small,imagesObj.brown,imagesObj.banana,"./images/animals/img8.png"],
    "horse": [imagesObj.big,imagesObj.brown,imagesObj.fast,"./images/animals/img9.png"], "camel": [imagesObj.big,imagesObj.yellow,imagesObj.hot,"./images/animals/img10.png"],
    "cow": [imagesObj.big,imagesObj.blackandwhite,imagesObj.milk,"./images/animals/img11.png"], "sheep": [imagesObj.small,imagesObj.white,imagesObj.cute,"./images/animals/img12.png"],
    "pig": [imagesObj.small,imagesObj.cute,imagesObj.pink,"./images/animals/img13.png"], "panda": [imagesObj.big,imagesObj.blackandwhite,imagesObj.cute,"./images/animals/img14.png"],
    "koala": [imagesObj.small,imagesObj.brown,imagesObj.cute,"./images/animals/img15.png"], "penguin": [imagesObj.small,imagesObj.blackandwhite,imagesObj.cold,"./images/animals/img16.png"],
    "dog": [imagesObj.small,imagesObj.cute,imagesObj.house,"./images/animals/img17.png"], "cat": [imagesObj.small,imagesObj.cute,imagesObj.house,"./images/animals/img18.png"],
    "rabbit": [imagesObj.small,imagesObj.cute,imagesObj.longears,"./images/animals/img19.png"], "mouse": [imagesObj.small,imagesObj.cute,imagesObj.cheese,"./images/animals/img20.png"],
    "snake": [imagesObj.small,imagesObj.long,imagesObj.mountain,"./images/animals/img21.png"], "frog": [imagesObj.small,imagesObj.cute,imagesObj.jump,"./images/animals/img22.png"],
    "bird": [imagesObj.small,imagesObj.cute,imagesObj.fly,"./images/animals/img23.png"], "fox": [imagesObj.small,imagesObj.cute,imagesObj.orange,"./images/animals/img24.png"],
    "turtle": [imagesObj.small,imagesObj.cute,imagesObj.hard,"./images/animals/img25.png"],
}


const numbersObj = {
    0: "./images/numbers/img1.png", 1: "./images/numbers/img2.png", 2: "./images/numbers/img3.png"
}
const hintBoxNumberObj = {
    "hint1": 0,
    "hint2": 1,
    "hint3": 2
}
const gameSelectNumberObj = {
    "game1": 0,
    "game2": 5,
    "game3": 10,
    "game4": 15,
    "game5": 20
}


const animalsArr = Object.keys( mainObj )
const animalImagesArr = Object.values( animalImagesObj )
const featuresArr = Object.values( imagesObj )
const hintImageBoxContainer = document.querySelector(".hint-image-box-container")
const hintBoxes = document.querySelectorAll(".hint-image-box")
let animalImagesContainer = document.querySelector(".animal-images-container")
const animalImages = document.querySelectorAll(".animal-image")
const gameSelectScreen = document.querySelector(".game-select-screen")
const gameScreen = document.querySelector(".game-screen")
const gameScreenInner = document.querySelector(".game-screen-inner")
const mainMenuScreen = document.querySelector(".main-menu-screen")
const practiceSelectScreen = document.querySelector(".practice-select-screen")
const practiceScreen = document.querySelector(".practice-screen")
const practiceAnimals = document.querySelector(".practice-animals")
const practiceFeatures = document.querySelector(".practice-features")
const imageScreen = document.querySelector(".image-screen")

const answerBtn = document.querySelector(".answer-button")
const answerBtnText = document.querySelector(".answer-button-text")
const gameSelectButtons = document.querySelectorAll(".game-select-button")
const gameSelectRandom = document.querySelector(".game-select-random")
const backButton = document.querySelector(".back-button")
const mainButtonGame = document.querySelector(".main-button-game")
const mainButtonPractice = document.querySelector(".main-button-practice")
const practiceButtonAnimals = document.querySelector(".practice-button-animals")
const practiceButtonFeatures = document.querySelector(".practice-button-features")
const naviLeft = document.querySelector(".navi-button-left")
const naviRight = document.querySelector(".navi-button-right")

const answerBox = document.querySelector(".image-box")

let gameStarted = false
let hintsFinished = false
let answerSeen = false
let animalImagesSeen = false
let hintCount = 0
let quizCount = 0
let answer = ""
let answerArr = []
let gameArr = []
let checkObj = {}
let wait = false
let record = ""
let getFive = []
let inGame = false
let inGameSelect = false
let inMain = true
let inPracticeSelect = false
let inPractice = false
let inImage = false
let practiceAnimal = ""
let practiceFeature = ""
let practiceIsAnimal = false


for ( x of animalsArr ) {
    checkObj[x] = false
}

function buildPracticeGrids() {
    for ( let i = 0; i < animalsArr.length; i++ ) {
        document.querySelector(".animals-grid").innerHTML += `
        <div class="practice-grid-box">
            <img src="${mainObj[animalsArr[i]][3]}">
        </div>
        `
    }
    for ( let i = 0; i < featuresArr.length; i++ ) {
        document.querySelector(".features-grid").innerHTML += `
        <div class="practice-grid-box">
            <img src="${featuresArr[i]}">
        </div>
        `
    }
    let allBoxes = document.querySelectorAll(".practice-grid-box")
    allBoxes.forEach( (image) => {
        image.addEventListener("click",()=>{
           let thisImage = image.children[0].getAttribute("src")
           openImage(thisImage)
        })
    })
}
buildPracticeGrids()

function openImage(image) {
    document.querySelector(".image").innerHTML = `<img src="${image}">`
    inImage = true
    inPractice = false
    imageScreen.classList.remove("behind")
    practiceScreen.classList.add("behind")
    if ( animalImagesArr.includes(image) ) {
        practiceAnimal = animalImagesArr.indexOf(image) 
        practiceIsAnimal = true
    } else {
        practiceFeature = featuresArr.indexOf(image)
        practiceIsAnimal = false 
    }
}

naviLeft.addEventListener("click",()=>{
    if ( practiceIsAnimal ) {
        if ( practiceAnimal > 0 ) {
            document.querySelector(".image").innerHTML = `<img src="${animalImagesArr[practiceAnimal-1]}">`
            practiceAnimal--
        }
    } else {
        if ( practiceFeature > 0 ) {
            document.querySelector(".image").innerHTML = `<img src="${featuresArr[practiceFeature-1]}">`
            practiceFeature--
        }
    }
})
naviRight.addEventListener("click",()=>{
    if ( practiceIsAnimal ) {
        if ( practiceAnimal < animalImagesArr.length-1 ) {
            document.querySelector(".image").innerHTML = `<img src="${animalImagesArr[practiceAnimal+1]}">`
            practiceAnimal++
        }
    } else {
        if ( practiceFeature < featuresArr.length-1 ) {
            document.querySelector(".image").innerHTML = `<img src="${featuresArr[practiceFeature+1]}">`
            practiceFeature++
        }
    }
    
})
/*
window.addEventListener("keydown",(x)=>{
    if ( x.key === "Enter" ) {
        if ( !wait ) {
            if ( !gameStarted ) {
                startGame()
            } else {
                gameStep()
            }
        }
    }
})
*/
backButton.addEventListener("click",()=>{
    if ( inGame ) {
        gameScreen.classList.add("behind")
        gameSelectScreen.classList.remove("behind")
        if ( gameScreenInner.classList.contains("flipped") ) {
            gameScreenInner.classList.remove("flipped")
        }
        gameScreenInner.innerHTML = record
        animalImagesContainer.innerHTML = ""
        answerBtnText.textContent = "Show Answer"
        answerSeen = false
        animalImagesSeen = false
        inGame = false
        inGameSelect = true
    } else if ( inGameSelect ) {
        mainMenuScreen.classList.remove("behind")
        gameSelectScreen.classList.add("behind")
        inGameSelect = false
        inMain = true
    } else if ( inPracticeSelect ) {
        practiceSelectScreen.classList.add("behind")
        mainMenuScreen.classList.remove("behind")
    } else if ( inPractice ) {
        practiceScreen.classList.add("behind")
        practiceSelectScreen.classList.remove("behind")
        if ( !practiceAnimals.classList.contains("behind") ) {
            practiceAnimals.classList.add("behind")
        }
        if ( !practiceFeatures.classList.contains("behind") ) {
            practiceFeatures.classList.add("behind")
        }
        inPractice = false
        inPracticeSelect = true
    } else if ( inImage ) {
        imageScreen.classList.add("behind")
        practiceScreen.classList.remove("behind")
        practiceAnimal = ""
        practiceFeature = ""
        inImage = false
        inPractice = true
    }
})

mainButtonPractice.addEventListener("click",()=>{
    inMain = false
    inPracticeSelect = true
    mainMenuScreen.classList.add("behind")
    practiceSelectScreen.classList.remove("behind")
})
practiceButtonAnimals.addEventListener("click",()=>{
    practiceSelectScreen.classList.add("behind")
    practiceScreen.classList.remove("behind")
    practiceAnimals.classList.remove("behind")
    inPracticeSelect = false
    inPractice = true
})
practiceButtonFeatures.addEventListener("click",()=>{
    practiceSelectScreen.classList.add("behind")
    practiceScreen.classList.remove("behind")
    practiceFeatures.classList.remove("behind")
    inPracticeSelect = false
    inPractice = true
})
mainButtonGame.addEventListener("click",()=>{
    inMain = false
    inGameSelect = true
    mainMenuScreen.classList.add("behind")
    gameSelectScreen.classList.remove("behind")
})
gameSelectButtons.forEach( (select)=>{
    select.addEventListener("click",()=>{
        let thisId = select.getAttribute("id")
        let selectRange = animalsArr.slice(gameSelectNumberObj[thisId],gameSelectNumberObj[thisId]+5)
        answerArr = selectRange.slice(0,5)
        gameSetup(answerArr)
        gameScreen.classList.remove("behind")
        gameSelectScreen.classList.add("behind")
    })
})
gameSelectRandom.addEventListener("click",()=>{
    let randomArr = animalsArr.slice(0,animalsArr.length).sort( ()=> { return 0.5 - Math.random() } )
    answerArr = randomArr.slice(0,5)
    gameSetup(answerArr)
    gameScreen.classList.remove("behind")
    gameSelectScreen.classList.add("behind")
})




//startGame()

/*
animalImagesContainer.addEventListener("click",()=>{
    if ( !animalImagesSeen ) {
        animalImagesContainer.classList.add("spin")
        setTimeout( ()=>{
            animalImagesContainer.classList.remove("spin")
            for ( let i = 0; i < getFive.length; i++ ) {
            animalImagesContainer.innerHTML += `<div class="animal-image"><img src="${mainObj[getFive[i]][3]}"></div>`
            }
        },395)
        animalImagesSeen = true
    }
})
*/
answerBtn.addEventListener("click",()=>{
    if ( !answerSeen ) {
        gameScreenInner.style.transform = "rotatex(180deg)"
        answerBox.style.transform = "rotatex(0deg)"
        /*
        gameScreenInner.classList.add("spin")
        gameScreenInner.classList.add("flipped")
        setTimeout( ()=>{
            gameScreenInner.innerHTML = `<div class="image-box"><img src="${mainObj[answer][3]}"></div>`
            gameScreenInner.classList.remove("spin")
            wait = false
        },395)
        */

        quizCount++
        if ( quizCount < 5 ) {
            answerBtnText.textContent = "Next"
        } else {
            answerBtnText.textContent = "Back"
        }
        answerSeen = true
    } else if ( quizCount < 5 ) {
        gameScreenInner.style.transform = "rotatex(0deg)"
        answerBox.style.transform = "rotatex(180deg)"
        gameScreenInner.innerHTML = record
        animalImagesContainer.innerHTML = ""
        setTimeout( ()=> {
            question(quizCount)
        },500)
        hintCount = 0
        answerBtnText.textContent = "Show Answer"
        answerSeen = false
        animalImagesSeen = false
    } else {
        gameScreen.classList.add("behind")
        gameSelectScreen.classList.remove("behind")
        gameScreenInner.style.transform = "rotatex(0deg)"
        answerBox.style.transform = "rotatex(180deg)"
        gameScreenInner.innerHTML = record
        animalImagesContainer.innerHTML = ""
        answerBtnText.textContent = "Show Answer"
        answerSeen = false
        animalImagesSeen = false
        inGame = false
        inGameSelect = true
    }
})

function gameSetup(answerArr) {
    inGame = true
    inGameSelect = false
    quizCount = 0
    hintCount = 0
    wait = false
    record = gameScreenInner.innerHTML 
    document.querySelectorAll(".hint-image-box").forEach( (hint)=>{
        hint.addEventListener("click",()=>{
            if ( !wait ) {
                hintCount = hintBoxNumberObj[hint.getAttribute("id")]
                thisImage = mainObj[answer][hintCount]
                hint.classList.add("spin")
                setTimeout( ()=>{
                    hint.innerHTML = `<img src="${thisImage}">`
                    hint.classList.remove("spin")
                    wait = false
                },395)
                wait = true
            }
        })
    })
    animalImagesContainer = document.querySelector(".animal-images-container")
    animalImagesContainer.addEventListener("click",()=>{
        if ( !animalImagesSeen ) {
            animalImagesContainer.classList.add("spin")
            setTimeout( ()=>{
                animalImagesContainer.classList.remove("spin")
                for ( let i = 0; i < getFive.length; i++ ) {
                animalImagesContainer.innerHTML += `<div class="animal-image"><img src="${mainObj[getFive[i]][3]}"></div>`
                }
            },395)
            animalImagesSeen = true
        }
    })
    gameArr = answerArr.slice(0,answerArr.length).sort( ()=> { return 0.5 - Math.random() } )
    answer = gameArr[quizCount]
    document.querySelector(".image-box").innerHTML = `<img src="${mainObj[answer][3]}">`
    animalImagesContainer.innerHTML = ""
    getFive = animalsArr.slice(0,animalsArr.length).sort( ()=> {return 0.5 - Math.random()}).slice(0,5)
    if ( !getFive.includes(answer) ) {
        getFive.pop()
        getFive.push(answer)
        getFive.sort( ()=>{ return 0.5 - Math.random()} )
    }
}

function question(quizCount) {
    wait = false
    record = gameScreenInner.innerHTML 
    document.querySelectorAll(".hint-image-box").forEach( (hint)=>{
        hint.addEventListener("click",()=>{
            if ( !wait ) {
                hintCount = hintBoxNumberObj[hint.getAttribute("id")]
                thisImage = mainObj[answer][hintCount]
                hint.classList.add("spin")
                setTimeout( ()=>{
                    hint.innerHTML = `<img src="${thisImage}">`
                    hint.classList.remove("spin")
                    wait = false
                },395)
                wait = true
            }
        })
    })
    animalImagesContainer = document.querySelector(".animal-images-container")
    animalImagesContainer.addEventListener("click",()=>{
        if ( !animalImagesSeen ) {
            animalImagesContainer.classList.add("spin")
            setTimeout( ()=>{
                animalImagesContainer.classList.remove("spin")
                for ( let i = 0; i < getFive.length; i++ ) {
                animalImagesContainer.innerHTML += `<div class="animal-image"><img src="${mainObj[getFive[i]][3]}"></div>`
                }
            },395)
            animalImagesSeen = true
        }
    })
    answer = gameArr[quizCount]
    document.querySelector(".image-box").innerHTML = `<img src="${mainObj[answer][3]}">`
    animalImagesContainer.innerHTML = ""
    getFive = animalsArr.slice(0,animalsArr.length).sort( ()=> {return 0.5 - Math.random()}).slice(0,5)
    if ( !getFive.includes(answer) ) {
        getFive.pop()
        getFive.push(answer)
        getFive.sort( ()=>{ return 0.5 - Math.random()} )
    }
}
