let btn=document.querySelectorAll(".button");
let display=document.querySelector(".display");
let calculation="";

btn.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        let operand=evt.target.innerText;

        

        if(operand=="C"){
            calculation="";
            display.innerText=calculation;
            
        }

        else if(operand=="="){
            display.innerText=eval(calculation);
            
        }

        else if(operand=="%"){
            calculation=String(eval(calculation+"/100"));
            display.innerText=calculation;

        }

        else if(operand=="x"){
            operand="*";
            calculation=calculation+operand;
            display.innerText=calculation;
        }
        

        else{
            
            calculation=calculation+operand;
            display.innerText=calculation;
        }





        
})
})




