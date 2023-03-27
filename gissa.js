const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgisningar = 0;
console.log(`slumptal= ${slumptal}`);

function gissaTal(){
    
    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int =Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");

    if (antalgisningar < 3){
        if (slumptal === gissa_int){
            console.log(`RÄTT! antalgissningar= ${antalgisningar}`);
            vinn = true;
            p_svar.innerHTML= `YOUR A WINNER!`;
            antalgisningar = 3;
            
        }
        else {
            console.log(`FEL! antalgissningar= ${antalgisningar}`);
            
            if (antalgisningar === 2)
                p_svar.innerHTML=`LOOSER!`;
            else
                p_svar.innerHTML=`FEL SVAR! ${textfelt_gissa}`;
            
            document.getElementById("gissa").value="";
            document.getElementById("gissa").focus();
            
        }
        antalgisningar++;
    }
    else{
        p_svar.innerHTML=`LOOSER!`;
    }
}