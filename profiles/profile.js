function progress(id) {
    const blocks = document.querySelector("#blocks");
    blocks.innerHTML = '';

    const prg = 300/4;
    for(let i=0; i<(new Date().getFullYear() % 4 === 0 ? 366 : 365)/4; i++) {
        const ele = document.createElement("span");
        ele.style.animationDelay = i*0.05+"s";
        if(i < prg) {
            ele.className = "block "+randBlock();
        }else {
            ele.className = "block d";
        }
        blocks.appendChild(ele);
    }
}

function randBlock() {
    let ran = Math.random();

    if(ran < 0.4) {
        return "a";
    }else if(ran < 0.8) {
        return "b";
    }else {
        return "c";
    }
}