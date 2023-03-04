
let turn = '';
let isgameover = false;

// Turn change condition.....

const changeTurn = () => {
    playerX.addEventListener('click', () => {
        turn = "X";
    });
    playerO.addEventListener('click', () => {
        turn = "0";
    });
    // return turn === "X"? "0": "X"
    return turn;

}
// winning Conditions
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
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            if(isgameover){
                document.getElementById('playerO').Disabled;
                document.getElementById('playerX').Disabled;
            }
          
        }
        // else{
        //     document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Tie"
        //     isgameover = true

        //  }
    })
}

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
    turn = changeTurn();
    isgameover = false
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
