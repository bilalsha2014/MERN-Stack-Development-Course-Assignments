

const divone=()=>{

let div1=document.getElementById('FirstDiv')
let firstpara=div1.firstChild.nextElementSibling
let secondpara=div1.firstChild.nextElementSibling.nextElementSibling
let thirdpara=div1.firstChild.nextElementSibling.nextElementSibling.nextElementSibling

firstpara.innerHTML='First Para Changed';
secondpara.innerHTML='Second Para Changed';
thirdpara.innerHTML='Third Para Changed';
firstpara.setAttribute('id','heading')
secondpara.setAttribute('id','heading')
thirdpara.setAttribute('id','heading')
}

const divtwo=()=>{
    let div2=document.getElementById('SecondDiv')
    let firstpara=div2.firstChild.nextElementSibling
    let secondpara=div2.firstChild.nextElementSibling.nextElementSibling
    let thirdpara=div2.firstChild.nextElementSibling.nextElementSibling.nextElementSibling
    firstpara.innerHTML='First Para Changed';
    secondpara.innerHTML='Second Para Changed';
    thirdpara.innerHTML='Third Para Changed';
    firstpara.setAttribute('id','heading')
    secondpara.setAttribute('id','heading')
    thirdpara.setAttribute('id','heading')
    }


const divthree=()=>{

        let div3=document.getElementById('ThirdDiv')
        let firstpara=div3.firstChild.nextElementSibling
        let secondpara=div3.firstChild.nextElementSibling.nextElementSibling
        let thirdpara=div3.firstChild.nextElementSibling.nextElementSibling.nextElementSibling
        
        firstpara.innerHTML='First Para Changed';
        secondpara.innerHTML='Second Para Changed';
        thirdpara.innerHTML='Third Para Changed';
        firstpara.setAttribute('id','heading')
        secondpara.setAttribute('id','heading')
        thirdpara.setAttribute('id','heading')
        }
    
const addone=()=>{

            let div1=document.getElementById('FirstDiv');
            let newPara=document.createElement('p')
            let textNode=document.createTextNode('New Para Added')
            
            newPara.appendChild(textNode)
            newPara.setAttribute('id','heading')
            div1.appendChild(newPara)
          
            }
const addtwo=()=>{

                let div2=document.getElementById('SecondDiv');
                let newPara=document.createElement('p')
                let textNode=document.createTextNode('New Para Added')
                
                newPara.appendChild(textNode)
                newPara.setAttribute('id','heading')
                div2.appendChild(newPara)
              
                }

const addthree=()=>{

                    let div3=document.getElementById('ThirdDiv');
                    let newPara=document.createElement('p')
                    let textNode=document.createTextNode('New Para Added')
                    
                    newPara.appendChild(textNode)
                    newPara.setAttribute('id','heading')
                    div3.appendChild(newPara)
                  
                    }