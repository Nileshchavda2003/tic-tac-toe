let turn = " " ;
playerX.addEventListener('click', () => {
    turn = "X";
});
 playerO.addEventListener('click', () => {
        turn = "0";
    });
//..................
// Function is called, return value will end up in x



//.......................
const changeTurn = () => {

        return turn === "X"? "0": "X"
    // return turn;


}
//.........................................................


// Winning and draw conditions
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let Draw = true;
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            Draw = false;
        }
    });

    if (Draw) {
        const allElementsNotNull = Array.from(boxtext).every(function (element) {
            return element.innerText !== '';
        });
        if (allElementsNotNull) {
            document.querySelector('.info').innerText = "It's a draw!";
            isgameover = true;
        }
    }
};


//........................................
let boxes = document.getElementsByClassName("square");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();

            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }

    })
})


reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    // turn = changeTurn();
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
