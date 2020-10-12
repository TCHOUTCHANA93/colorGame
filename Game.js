const color = document.getElementsByClassName('color');
const cod = document.getElementById("cod");
const gameHeader= document.getElementById('gameHeader');
const tryAgain = document.getElementById('tryAgain');
const Hard = document.getElementById('Hard');
const Easy = document.getElementById('Easy');
const A = document.getElementById('A');
const welcome =document.getElementById('welcome');
const win =document.querySelector('.win');
const loose =document.querySelector('.loose');
let couleur = 6;



function generateColor(){
    couleur = 6;
    let tab=[]
    
    for(i=0; i < couleur; i++){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgb= 'rgb(' + r + ', ' +  g + ', ' + b + ')'
        tab.push(rgb)
        
    }
    console.log(tab);
    const choix = Math.floor(Math.random()*tab.length);
    cod.innerHTML = tab[choix];
    win.style.display='none';
    
    loose.style.display='block';

    for(i=0; i< couleur; i++){
        color[i].style.opacity='1';
        color[i].style.backgroundColor= tab[i] ;
    }
    

    console.log(choix);   
    
        for(i=0; i < tab.length; i++){
            color[i].addEventListener('click', function(hassia){
            var clr= hassia.target.style.backgroundColor;
            if(tab[choix]==clr ){
                gameHeader.style.backgroundColor= tab[choix];
                win.textContent='😇 Bingo!';
                win.style.display='block';
                loose.style.display='none';  
                for (i=0; i < couleur; i++) {
                    color[i].style.opacity= '1'
                    color[i].style.backgroundColor = tab[choix];
                    
                }
            }else{
                hassia.target.style.opacity='0'
                loose.textContent='😬 Wrong!';
               
            }
            })
        
        }
}

function generateColorEasy(){

    let tab=[]
     couleur = 3;
    for(i=0; i < couleur; i++){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgb= 'rgb(' + r + ', ' +  g + ', ' + b + ')'
        tab.push(rgb)
        
    }
    console.log(tab);
    const choix = Math.floor(Math.random()*3);
    cod.innerHTML = tab[choix];
    win.style.display='none';

    loose.style.display='block';  

    for(i=0; i< 3; i++){
        color[i].style.backgroundColor= tab[i] ;
    }
    for(i=3; i< 6; i++){
        color[i].style.opacity= '0' ;
    }
    
    console.log(choix);   
    
        for(i=0; i < 3; i++){
            color[i].addEventListener('click', function(hassia){
            var clr= hassia.target.style.backgroundColor;
            if(tab[choix]==clr ){
                gameHeader.style.backgroundColor= tab[choix];
                win.textContent='😇 Bingo!';
                win.style.display='block';
                loose.style.display='none'; 
                
                for (i=0; i < 3; i++) {
                    color[i].style.opacity= '1'
                    color[i].style.backgroundColor = tab[choix];
                    
                }
            }else{
                hassia.target.style.opacity='0';
                loose.textContent='😬 Wrong !';
                
            }
            })
        
        }

}

function starting() {
welcome.style.display='none';

generateColorEasy();
}
generateColor()


tryAgain.addEventListener('click', starting);

Hard.addEventListener('click', generateColor);

Easy.addEventListener('click', generateColorEasy);

welcome.addEventListener('click', starting);













