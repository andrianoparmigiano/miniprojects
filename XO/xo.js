const game = function () {
    document.querySelector("#app").innerHTML = `
    <div class="xo">
        <div class="xo1"></div>
        <div class="xo2"></div>
        <div class="xo3"></div>
        <div class="xo4"></div>
        <div class="xo5"></div>
        <div class="xo6"></div>
        <div class="xo7"></div>
        <div class="xo8"></div> 
        <div class="xo9"></div>
    </div>
    `;
    let player = "X";
    const arr = document.querySelectorAll(".xo > div");
    // let matr = [[],[],[]];
    // arr.forEach((el, i) => {
    //     matr[Math.floor(i / 3)][(i % 3)] = {class: el.target.classList[0], };
    // });
    let matr = [['','','',],
                ['','','',],
                ['','','']]
    console.log(matr);

    const win_message = (winner) => {
        alert(winner)
        document.querySelector("#app").innerHTML = '<button class="start" onclick="game()">start</button>'
    }

    const diagonal = (symb) => {
        let toright, toleft;
        toright = true;
        toleft = true;
        for (let i=0; i<matr.length; i++) {
            toright &= (matr[i][i] == symb);
            toleft &= (matr[matr.length-i-1][i] == symb);
        }
            
        if (toright || toleft) return true;
            
        return false; 
    }

    const lines = (symb) => {
        let cols, rows;
        for (let col=0; col<matr.length; col++) {
            cols = true;
            rows = true;
            for (let row=0; row<matr.length; row++) {
                cols &= (matr[col][row] == symb);
                rows &= (matr[row][col] == symb);
            }
                
            // Это условие после каждой проверки колонки и столбца
            // позволяет остановить дальнейшее выполнение, без проверки 
            // всех остальных столбцов и строк.
            if (cols || rows) return true; 
        }
            
        return false; 
    }

    for (let el of arr) {
        el.onclick = function (event) {
            const position = event.target.classList[0];
            console.log(position);
            if (el.innerHTML === "") {
                el.innerHTML = player;
                matr[Math.floor((position[2]-1)/3)][(position[2]-1)%3] = player;
                if (player === "O") {
                    player = "X";
                } else {
                    player = "O";
                }
            }
            console.log(matr);
            
            if(lines('X') || diagonal('X')) win_message('Winner X')
            if(lines('O') || diagonal('O')) win_message('Winner O')
            let f = true
            matr.forEach(row => row.forEach(column => f &&= column !== ''))
            if(f) win_message("ничья")
            console.log(f);
        }
    }
};
