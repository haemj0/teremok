var click = 1;
var clicks = 0;
function bababab(){
  if (clicks==10){
  alert(`Молодец! Задание выполнено! Допущено ${click} ошибок. Игра окончена`);
}
}


function soundClick(){
    var audio = new Audio(); 
    audio.src = './assets/music/buben.mp3';  
    audio.autoplay = true; 
  }

  function soundClick1(){
    var audio1 = new Audio(); 
    audio1.src = './assets/music/lozhka.mp3';  
    audio1.autoplay = true; 
  }

  function soundClick2(){
    var audio = new Audio(); 
    audio.src = './assets/music/rascheska.mp3';  
    audio.autoplay = true; 
  }

  function soundClick3(){
    var audio = new Audio(); 
    audio.src = './assets/music/maracas.mp3';  
    audio.autoplay = true; 
  }

  function soundClick4(){
    var audio = new Audio(); 
    audio.src = './assets/music/paket.mp3';  
    audio.autoplay = true; 
  }

  function soundClick5(){
    var audio = new Audio(); 
    audio.src = './assets/music/baraban.mp3';  
    audio.autoplay = true; 
  }

  function soundClick6(){
    var audio = new Audio(); 
    audio.src = './assets/music/kolokol.mp3';  
    audio.autoplay = true; 
  }

  function soundClick7(){
    var audio = new Audio();  
    audio.src = './assets/music/svistulka.mp3';  
    audio.autoplay = true; 
  }

  function soundClick8(){
    var audio = new Audio();  
    audio.src = './assets/music/ksilofon.mp3';  
    audio.autoplay = true; 
  }

  function soundClick9(){
    var audio = new Audio();  
    audio.src = './assets/music/treshotka.mp3';  
    audio.autoplay = true;  
  }


  const one = document.body.querySelector('.pila');
  const two = document.body.querySelector('.ras');
  const tri = document.body.querySelector('.bub');
  const che = document.body.querySelector('.svist');
  const pyat = document.body.querySelector('.loski');
  const shet = document.body.querySelector('.mar');
  const sem = document.body.querySelector('.paket');
  const vosem = document.body.querySelector('.bar');
  const dev = document.body.querySelector('.kol');
  const des = document.body.querySelector('.ksi');
  const odinn = document.body.querySelector('.tre');
  
  let firstElementClicked = false;
  
  one.addEventListener('click', () => {
      if (!firstElementClicked) {
          firstElementClicked = true;
      } 
  });
  
  two.addEventListener('click', () => {
      if (firstElementClicked) {
        two.className = 'rass';
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
  });
  
  tri.addEventListener('click', () => {
    if (firstElementClicked==true) {
      click += 1;
      document.getElementById("click").innerHTML = click;
    }
      firstElementClicked = false;

  });

  che.addEventListener('click', () => {
    if (firstElementClicked==true) {
      click += 1;
      document.getElementById("click").innerHTML = click;
    }
      firstElementClicked = false;
});

pyat.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

shet.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

sem.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

vosem.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

dev.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

des.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});

odinn.addEventListener('click', () => {
  if (firstElementClicked==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked = false;
});






const one1 = document.body.querySelector('.terem');
const two1 = document.body.querySelector('.ras');
const tri1 = document.body.querySelector('.bub');
const che1 = document.body.querySelector('.svist');
const pyat1 = document.body.querySelector('.loski');
const shet1 = document.body.querySelector('.mar');
const sem1 = document.body.querySelector('.paket');
const vosem1 = document.body.querySelector('.bar');
const dev1 = document.body.querySelector('.kol');
const des1 = document.body.querySelector('.ksi');
const odinn1 = document.body.querySelector('.tre');

let firstElementClicked1 = false;

one1.addEventListener('click', () => {
    if (!firstElementClicked1) {
        firstElementClicked1 = true;
    } 
});

des1.addEventListener('click', () => {
    if (firstElementClicked1) {
      des1.className = 'ksii';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()

});

tri1.addEventListener('click', () => {
  if (firstElementClicked1==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked1 = false;

});

che1.addEventListener('click', () => {
  if (firstElementClicked1==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked1 = false;
});

pyat1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

shet1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

sem1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

vosem1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

dev1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

two1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});

odinn1.addEventListener('click', () => {
if (firstElementClicked1==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked1 = false;
});





const one2 = document.body.querySelector('.stuk');
const two2 = document.body.querySelector('.ras');
const tri2 = document.body.querySelector('.bub');
const che2 = document.body.querySelector('.svist');
const pyat2 = document.body.querySelector('.loski');
const shet2 = document.body.querySelector('.mar');
const sem2 = document.body.querySelector('.paket');
const vosem2 = document.body.querySelector('.bar');
const dev2 = document.body.querySelector('.kol');
const des2 = document.body.querySelector('.ksi');
const odinn2 = document.body.querySelector('.tre');

let firstElementClicked2 = false;

one2.addEventListener('click', () => {
    if (!firstElementClicked2) {
        firstElementClicked2 = true;
    } 
});

pyat2.addEventListener('click', () => {
    if (firstElementClicked2) {
      pyat2.className = 'loo';
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri2.addEventListener('click', () => {
  if (firstElementClicked2==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked2 = false;

});

che2.addEventListener('click', () => {
  if (firstElementClicked2==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked2 = false;
});

two2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

shet2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

sem2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

vosem2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

dev2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

des2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});

odinn2.addEventListener('click', () => {
if (firstElementClicked2==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked2 = false;
});





const one3 = document.body.querySelector('.mouse');
const two3 = document.body.querySelector('.ras');
const tri3 = document.body.querySelector('.bub');
const che3 = document.body.querySelector('.svist');
const pyat3 = document.body.querySelector('.loski');
const shet3 = document.body.querySelector('.mar');
const sem3 = document.body.querySelector('.paket');
const vosem3 = document.body.querySelector('.bar');
const dev3 = document.body.querySelector('.kol');
const des3 = document.body.querySelector('.ksi');
const odinn3 = document.body.querySelector('.tre');

let firstElementClicked3 = false;

one3.addEventListener('click', () => {
    if (!firstElementClicked3) {
        firstElementClicked3 = true;
    } 
});

dev3.addEventListener('click', () => {
    if (firstElementClicked3) {
      dev3.className = 'koll';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri3.addEventListener('click', () => {
  if (firstElementClicked3==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked3 = false;

});

che3.addEventListener('click', () => {
  if (firstElementClicked3==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked3 = false;
});

pyat3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

shet3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

sem3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

vosem3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

two3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

des3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});

odinn3.addEventListener('click', () => {
if (firstElementClicked3==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked3 = false;
});




const one4 = document.body.querySelector('.frog');
const two4 = document.body.querySelector('.ras');
const tri4 = document.body.querySelector('.bub');
const che4 = document.body.querySelector('.svist');
const pyat4 = document.body.querySelector('.loski');
const shet4 = document.body.querySelector('.mar');
const sem4 = document.body.querySelector('.paket');
const vosem4 = document.body.querySelector('.bar');
const dev4 = document.body.querySelector('.kol');
const des4 = document.body.querySelector('.ksi');
const odinn4 = document.body.querySelector('.tre');

let firstElementClicked4 = false;

one4.addEventListener('click', () => {
    if (!firstElementClicked4) {
        firstElementClicked4 = true;
    } 
});

odinn4.addEventListener('click', () => {
    if (firstElementClicked4) {
      odinn4.className = 'tree';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri4.addEventListener('click', () => {
  if (firstElementClicked4==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked4 = false;

});

che4.addEventListener('click', () => {
  if (firstElementClicked4==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked4 = false;
});

pyat4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

shet4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

sem4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

vosem4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

dev4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

des4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});

two4.addEventListener('click', () => {
if (firstElementClicked4==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked4 = false;
});





const one5 = document.body.querySelector('.rabbit');
const two5 = document.body.querySelector('.ras');
const tri5 = document.body.querySelector('.bub');
const che5 = document.body.querySelector('.svist');
const pyat5 = document.body.querySelector('.loski');
const shet5 = document.body.querySelector('.mar');
const sem5 = document.body.querySelector('.paket');
const vosem5 = document.body.querySelector('.bar');
const dev5 = document.body.querySelector('.kol');
const des5 = document.body.querySelector('.ksi');
const odinn5 = document.body.querySelector('.tre');

let firstElementClicked5 = false;

one5.addEventListener('click', () => {
    if (!firstElementClicked5) {
        firstElementClicked5 = true;
    } 
});

tri5.addEventListener('click', () => {
    if (firstElementClicked5) {
      tri5.className = 'bubb';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

two5.addEventListener('click', () => {
  if (firstElementClicked5==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked5 = false;

});

che5.addEventListener('click', () => {
  if (firstElementClicked5==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked5 = false;
});

pyat5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

shet5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

sem5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

vosem5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

dev5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

des5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});

odinn5.addEventListener('click', () => {
if (firstElementClicked5==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked5 = false;
});





const one6 = document.body.querySelector('.lisa');
const two6 = document.body.querySelector('.ras');
const tri6 = document.body.querySelector('.bub');
const che6 = document.body.querySelector('.svist');
const pyat6 = document.body.querySelector('.loski');
const shet6 = document.body.querySelector('.mar');
const sem6 = document.body.querySelector('.paket');
const vosem6 = document.body.querySelector('.bar');
const dev6 = document.body.querySelector('.kol');
const des6 = document.body.querySelector('.ksi');
const odinn6 = document.body.querySelector('.tre');

let firstElementClicked6 = false;

one6.addEventListener('click', () => {
    if (!firstElementClicked6) {
        firstElementClicked6 = true;
    } 
});

sem6.addEventListener('click', () => {
    if (firstElementClicked6) {
      sem6.className = 'pak';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri6.addEventListener('click', () => {
  if (firstElementClicked6==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked6 = false;

});

che6.addEventListener('click', () => {
  if (firstElementClicked6==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked6 = false;
});

pyat6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

shet6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

two6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

vosem6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

dev6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

des6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});

odinn6.addEventListener('click', () => {
if (firstElementClicked6==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked6 = false;
});






const one7 = document.body.querySelector('.volk');
const two7 = document.body.querySelector('.ras');
const tri7 = document.body.querySelector('.bub');
const che7 = document.body.querySelector('.svist');
const pyat7 = document.body.querySelector('.loski');
const shet7 = document.body.querySelector('.mar');
const sem7 = document.body.querySelector('.paket');
const vosem7 = document.body.querySelector('.bar');
const dev7 = document.body.querySelector('.kol');
const des7 = document.body.querySelector('.ksi');
const odinn7 = document.body.querySelector('.tre');

let firstElementClicked7 = false;

one7.addEventListener('click', () => {
    if (!firstElementClicked7) {
        firstElementClicked7 = true;
    } 
});

shet7.addEventListener('click', () => {
    if (firstElementClicked7) {
      shet7.className = 'marr';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri7.addEventListener('click', () => {
  if (firstElementClicked7==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked7 = false;

});

che7.addEventListener('click', () => {
  if (firstElementClicked7==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked7 = false;
});

pyat7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

two7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

sem7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

vosem7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

dev7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

des7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});

odinn7.addEventListener('click', () => {
if (firstElementClicked7==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked7 = false;
});




const one8 = document.body.querySelector('.beer');
const two8 = document.body.querySelector('.ras');
const tri8 = document.body.querySelector('.bub');
const che8 = document.body.querySelector('.svist');
const pyat8 = document.body.querySelector('.loski');
const shet8 = document.body.querySelector('.mar');
const sem8 = document.body.querySelector('.paket');
const vosem8 = document.body.querySelector('.bar');
const dev8 = document.body.querySelector('.kol');
const des8 = document.body.querySelector('.ksi');
const odinn8 = document.body.querySelector('.tre');

let firstElementClicked8 = false;

one8.addEventListener('click', () => {
    if (!firstElementClicked8) {
        firstElementClicked8 = true;
    } 
});

vosem8.addEventListener('click', () => {
    if (firstElementClicked8) {
      vosem8.className = 'barr';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri8.addEventListener('click', () => {
  if (firstElementClicked8==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked8 = false;

});

che8.addEventListener('click', () => {
  if (firstElementClicked8==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked8 = false;
});

pyat8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

shet8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

sem8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

two8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

dev8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

des8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});

odinn8.addEventListener('click', () => {
if (firstElementClicked8==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked8 = false;
});





const one9 = document.body.querySelector('.song');
const two9 = document.body.querySelector('.ras');
const tri9 = document.body.querySelector('.bub');
const che9 = document.body.querySelector('.svist');
const pyat9 = document.body.querySelector('.loski');
const shet9 = document.body.querySelector('.mar');
const sem9 = document.body.querySelector('.paket');
const vosem9 = document.body.querySelector('.bar');
const dev9 = document.body.querySelector('.kol');
const des9 = document.body.querySelector('.ksi');
const odinn9 = document.body.querySelector('.tre');

let firstElementClicked9 = false;

one9.addEventListener('click', () => {
    if (!firstElementClicked9) {
        firstElementClicked9 = true;
    } 
});

che9.addEventListener('click', () => {
    if (firstElementClicked9) {
      che9.className = 'svis';
    clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 1;
      document.getElementById("click").innerHTML = click;
    } else{
      clicks += 0;
      document.getElementById("clicks").innerHTML = clicks;
      click -= 0;
      document.getElementById("click").innerHTML = click;
    }
    bababab()
});

tri9.addEventListener('click', () => {
  if (firstElementClicked9==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked9 = false;

});

two9.addEventListener('click', () => {
  if (firstElementClicked9==true) {
    click += 1;
    document.getElementById("click").innerHTML = click;
  }
    firstElementClicked9 = false;
});

pyat9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

shet9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

sem9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

vosem9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

dev9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

des9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});

odinn9.addEventListener('click', () => {
if (firstElementClicked9==true) {
  click += 1;
  document.getElementById("click").innerHTML = click;
}
  firstElementClicked9 = false;
});




