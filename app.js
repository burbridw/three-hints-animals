const mainObj = {
    "bear": ["./images/features/img1.png","./images/features/img8.png","./images/features/img18.png","./images/animals/img1.png"], "polar bear": ["./images/features/img1.png","white","cold","./images/animals/img2.png"],
    "elephant": ["./images/features/img1.png","long nose","savanna","./images/animals/img3.png"], "tiger": ["./images/features/img1.png","yellow and black","scary","./images/animals/img4.png"],
    "lion": ["./images/features/img1.png","yellow","scary","./images/animals/img5.png"], "zebra": ["./images/features/img1.png","white and black","savanna","./images/animals/img6.png"],
    "gorilla": ["./images/features/img1.png","scary","./images/features/img18.png","./images/animals/img7.png"], "monkey": ["small","./images/features/img8.png","banana","./images/animals/img8.png"],
    "horse": ["./images/features/img1.png","./images/features/img8.png","fast","./images/animals/img9.png"], "camel": ["./images/features/img1.png","yellow","hot","./images/animals/img10.png"],
    "cow": ["./images/features/img1.png","white and black","milk","./images/animals/img11.png"], "sheep": ["small","white","cute","./images/animals/img12.png"],
    "pig": ["small","cute","pink","./images/animals/img13.png"], "panda": ["./images/features/img1.png","white and black","cute","./images/animals/img14.png"],
    "koala": ["small","./images/features/img8.png","cute","./images/animals/img15.png"], "penguin": ["small","white and black","cold","./images/animals/img16.png"],
    "dog": ["small","cute","house","./images/animals/img17.png"], "cat": ["small","cute","house","./images/animals/img18.png"],
    "rabbit": ["small","cute","long ears","./images/animals/img19.png"], "mouse": ["small","cute","cheese","./images/animals/img20.png"],
    "snake": ["small","long","./images/features/img18.png","./images/animals/img21.png"], "frog": ["small","cute","jump","./images/animals/img22.png"],
    "bird": ["small","cute","fly","./images/animals/img23.png"], "fox": ["small","cute","orange","./images/animals/img24.png"],
    "turtle": ["small","cute","hard","./images/animals/img25.png"],
}
const animalsArr = Object.keys( mainObj )



let gameStarted = false
let hintsFinished = false
let hintCount = 1
let answer = ""
let answerArr = []
let checkObj = {}

for ( x of animalsArr ) {
    checkObj[x] = false
}

window.addEventListener("keydown",(x)=>{
    if ( x.key === "Enter" ) {
        if ( !gameStarted ) {
            startGame()
        } else if ( !hintsFinished ) {
            nextHint()
        } else {
            showAnswer()
        }
    }
})

function startGame() {
    gameStarted = true
    let getRandom = Math.floor( Math.random()*animalsArr.length )
    answer = animalsArr[getRandom]
    if ( !checkObj[answer] ) {
        checkObj[answer] = true
        nextHint()
    } else {
        startGame()
    }
}

function nextHint() {
    console.log("Hint "+hintCount+": "+ mainObj[answer][hintCount-1])
    hintCount++
    if ( hintCount > 3 ) {
        hintsFinished = true
    }
}

function showAnswer() {
    console.log("The answer is: "+answer)
    document.querySelector(".image-box").innerHTML = `<img src="${mainObj[answer][3]}">`
    if ( Object.keys(checkObj).filter( value =>  !checkObj[value] ).length > 0 ) {
        hintsFinished = false
        gameStarted = false
        hintCount = 1
    } else {
        console.log("The game is over")
    }
}