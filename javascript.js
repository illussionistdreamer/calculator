let display = document.getElementById("in");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map(buttons =>{
    buttons.addEventListener('click',(e)=>{
       switch(e.target.innerText){
           case 'C':
               display.innerHTML=" ";
               break;
            case 'CE':
                display.innerHTML=" ";
                break;
            case '<':
                display.innerHTML= display.innerHTML.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerHTML= eval(display.innerHTML);
                }catch{
                    display.innerHTML="Error!";
                }
                
                break;           
           default: 
                   display.innerHTML += e.target.innerText;
       }
    })
})
