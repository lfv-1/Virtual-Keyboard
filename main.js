let container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);

let wrapp = document.createElement('div');
    wrapp.className = 'wrapper';
    container.append(wrapp);

let textarea = document.createElement('textarea');
    textarea.id = "textarea";
    textarea.rows = "10";
    textarea.cols = "30";
    textarea.autofocus = true;
    wrapp.append(textarea);

const buttons = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "&#92"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "&#39", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#9650", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Alt", "&#9664", "&#9660", "&#9654", "Ctrl"]
    ]

function createKeyboard(){
    let keyboardContainer = document.createElement('div');
    keyboardContainer.className = 'keyboard_container';
    wrapp.append(keyboardContainer);

    for(let i=0; i<buttons.length; i++){
        let row = document.createElement('div');
        row.className = 'row';
        keyboardContainer.append(row);
        for(let j=0; j<buttons[i].length; j++){
            let key = document.createElement('div');
            key.classList ='key'
            key.innerHTML = buttons[i][j]
            row.append(key)
                if(key.textContent == "Backspace"){
                    key.classList.add('backspace')
                }
                if(key.textContent == "Tab"){
                    key.classList.add('tab')
                }
                if(key.textContent == "CapsLock"){
                    key.classList.add('capsLk')
                }
                if(key.textContent == "Enter"){
                    key.classList.add('enter')
                }
                if(key.textContent == "Shift"){
                    key.classList.add('shift')
                }
                if(key.textContent == "▲"){
                    key.classList.add('arrow_up')
                }
                if(key.textContent == "Ctrl"){
                    key.classList.add('ctrl')
                }
                if(key.textContent == "Win"){
                    key.classList.add('win')
                }
                if(key.textContent == "Alt"){
                    key.classList.add('alt')
                }
                if(key.textContent == " "){
                    key.classList.add('space')
                }
                if(key.textContent == "◀"){
                    key.classList.add('arrow_left')
                }
                if(key.textContent == "▼"){
                    key.classList.add('arrow_down')
                }
                if(key.textContent == "▶"){
                    key.classList.add('arrow_right')
                }
        }
    }
}

createKeyboard();


const caps = document.querySelector('.capsLk');
const space = document.querySelector('.space');
const keys = document.querySelectorAll('.key');
const tab = document.querySelector('.tab');
const del = document.querySelector('.del');
const backspace = document.querySelector('.backspace');
const shift = document.querySelectorAll('.shift');
const ctrl = document.querySelectorAll('.ctrl');
const alt = document.querySelectorAll('.alt');
const win = document.querySelector('.win');
const enter = document.querySelector('.enter');
const arrow_up = document.querySelector('.arrow_up');
const arrow_down = document.querySelector('.arrow_down');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');





function activeKeysOnMouse(){
    for (let i = 0; i < keys.length; i++){
        keys[i].addEventListener('mousedown',function(){
            if(!this.classList.contains('capsLk')){
                keys[i].classList.add('active');
            }if ( keys[i].getAttribute('keyname') || keys[i].getAttribute('lowerName')) {
                if(caps.classList.contains('active')){
                    textarea.value += keys[i].textContent.toUpperCase();
                }else {textarea.value += keys[i].textContent.toLowerCase();  
            }
                          
            }if(this.classList.contains('tab')){
                textarea.value += '\t'
            }if(this.classList.contains('backspace')){
                textarea.value = textarea.value.slice(0,-1);
            }if(this.classList.contains('enter')){
                textarea.value += '\n'
            }if(this.classList.contains('space')){
                textarea.value += ' '
            }
        })

    caps.addEventListener('click',()=>{
        caps.classList.toggle('active');
    })
    
        keys[i].addEventListener('mouseup',function(){
            if(!this.classList.contains('capsLk')){
                keys[i].classList.remove('active');
            }
        })
    }
}

activeKeysOnMouse();

function activeKeysOnKeyboard(){
    for(let i =0;i<keys.length;i++){
            if( keys[i] != caps && 
                keys[i] != space && 
                keys[i] != tab && 
                keys[i] != del && 
                keys[i] != backspace &&
                keys[i] != shift[0] &&
                keys[i] != shift[1] &&
                keys[i] != ctrl[0] &&
                keys[i] != ctrl[1] &&
                keys[i] != alt[0] &&
                keys[i] != alt[1] &&
                keys[i] != win &&
                keys[i] != enter){
                    keys[i].setAttribute('keyname', keys[i].innerText);
                    keys[i].setAttribute('lowerName', keys[i].innerText.toLowerCase());  
            }
    }

    window.addEventListener('keydown',function(el){
        for(let i =0;i<keys.length;i++){
            if(el.key == keys[i].getAttribute('keyname') || el.key == keys[i].getAttribute('lowerName')){
                keys[i].classList.add('active')
            }
            
        }if(el.code == 'CapsLock'){
            caps.classList.toggle('active');
        }if(el.code =='Space'){
            space.classList.add('active');
        }if(el.code == 'Tab'){
            el.preventDefault() 
            textarea.value += '\t';
            tab.classList.add('active');
        }if(el.code == 'Backspace'){
            backspace.classList.add('active');
        }if (el.code == 'ShiftLeft'){
            shift[0].classList.add('active');
        }if (el.code == 'ShiftRight'){
            shift[1].classList.add('active');
        }if (el.code == 'ControlLeft'){
            el.preventDefault();
            ctrl[0].classList.add('active');
        }if (el.code == 'ControlRight'){
            el.preventDefault();
            ctrl[1].classList.add('active');
        }if (el.code == 'AltLeft'){
            el.preventDefault();
            alt[0].classList.add('active');
        }if (el.code == 'AltRight'){
            el.preventDefault();
            alt[1].classList.add('active');
        }if (el.code == 'MetaLeft'){
            win.classList.add('active');
        }if (el.code == 'ArrowUp'){
            el.preventDefault()
            arrow_up.classList.add('active');
            textarea.value += "▲"
        }if (el.code == 'ArrowDown'){
            el.preventDefault()
            arrow_down.classList.add('active');
            textarea.value += "▼"
        }if (el.code == 'ArrowRight'){
            el.preventDefault()
            arrow_right.classList.add('active');
            textarea.value += "▶"
        }if (el.code == 'ArrowLeft'){
            el.preventDefault()
            arrow_left.classList.add('active');
            textarea.value += "◀"
        }
    })

    window.addEventListener('keyup',function(el){
        for(let i =0;i<keys.length;i++){
            if(el.key == keys[i].getAttribute('keyname') || el.key == keys[i].getAttribute('lowerName')){
                keys[i].classList.remove('active');
            }
        }if(el.code =='Space'){
            space.classList.remove('active');
        }if(el.code == 'Tab'){
            tab.classList.remove('active');
        }if(el.code == 'Backspace'){
            backspace.classList.remove('active');
        }
        if (el.code == 'ShiftLeft'){
            shift[0].classList.remove('active');
        }if (el.code == 'ShiftRight'){
            shift[1].classList.remove('active');
        }if (el.code == 'ControlLeft'){
            el.preventDefault()
            ctrl[0].classList.remove('active');
        }if (el.code == 'ControlRight'){
            el.preventDefault()
            ctrl[1].classList.remove('active');
        }if (el.code == 'AltLeft'){
            el.preventDefault()
            alt[0].classList.remove('active');
        }if (el.code == 'AltRight'){
            el.preventDefault()
            alt[1].classList.remove('active');
        }if (el.code == 'MetaLeft'){
            win.classList.remove('active');
        }if (el.code == 'ArrowUp'){
            arrow_up.classList.remove('active');
        }if (el.code == 'ArrowDown'){
            arrow_down.classList.remove('active');
        }if (el.code == 'ArrowRight'){
            arrow_right.classList.remove('active');
        }if (el.code == 'ArrowLeft'){
            arrow_left.classList.remove('active');
        }
    })
}

window.onload = function(){
    activeKeysOnKeyboard()
}


window.addEventListener('mouseup',()=>{
    textarea.focus()
})
