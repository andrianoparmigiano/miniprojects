let count = 0
let indexArray = []

function add(){
    count++
    indexArray.push(`note${Date.now()}`)
    //console.log(indexArray)
    let note           = document.createElement('div');
    console.log(note);
    note.className = "note position-relative";
    note.id = `${indexArray[count-1]}`
    note.innerHTML = `<span class="position-absolute top-0 start-0 translate-middle badge bg-primary nomer">
                    </span>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Заголовок</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Заголовок">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Текст</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-primary" onclick="save('${indexArray[count-1]}')">
                        save
                    </button>
                    <button type="button" class="btn btn-outline-primary" onclick="del('${indexArray[count-1]}')">
                        X
                    </button>`;
    document.getElementById('content').append(note);
    let nomers = document.querySelectorAll('.nomer')
    for(let i = 0; i< nomers.length; i++){
        nomers[i].innerHTML = `${i + 1}:`
    }
}

function del(note){
    document.getElementById(note).remove();
    let index = indexArray.indexOf(note)
    indexArray.splice(index, 1)
    count--
    let nomers = document.querySelectorAll('.nomer')
    for(let i = 0; i< nomers.length; i++){
        nomers[i].innerHTML = `${i + 1}:`
    }
}

function save(note){
    let name = document.querySelector(`#${note} input[type='text']`)
    let text = document.querySelector(`#${note} textarea`)
    let q = document.querySelector(`#${note}`)
    if(text.value===''||name.value==='') {
        alert('Поля ввода пусты!')
    }
    else{
        q.innerHTML = `<span class="position-absolute top-0 start-0 translate-middle badge bg-primary nomer">
                        </span>
                        <h1 class="h1">${name.value}</h1>
                        <pre class="span">${text.value}</pre>
                        <button type="button" class="btn btn-outline-primary" onclick="edit('${note}')">
                            редактировать
                        </button>
                        <button type="button" class="btn btn-outline-primary" onclick="del('${note}')">
                            X
                        </button>`
        let nomers = document.querySelectorAll('.nomer')
        for(let i = 0; i< nomers.length; i++){
            nomers[i].innerHTML = `${i + 1}:`
        }
    }
}

function edit(note){
    let q = document.querySelector(`#${note}`)
    let h1 = document.querySelector(`#${note} h1`)
    let span = document.querySelector(`#${note} .span`)
    q.innerHTML = `<span class="position-absolute top-0 start-0 translate-middle badge bg-primary nomer">
                    </span>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Заголовок</label>
                        <input value="${h1.innerHTML}" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Заголовок">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Текст</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${span.innerHTML}</textarea>
                    </div>
                    <button type="button" class="btn btn-outline-primary" onclick="save('${note}')">
                        save
                    </button>
                    <button type="button" class="btn btn-outline-primary" onclick="del('${note}')">
                        X
                    </button>`
    let nomers = document.querySelectorAll('.nomer')
    for(let i = 0; i< nomers.length; i++){
        nomers[i].innerHTML = `${i + 1}:`
    }
}