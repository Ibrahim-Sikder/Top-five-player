

function selectedTopPlayer(element){
    const elementName = element.parentNode.children[0].innerText;
    const li = document.createElement('li');
    li.innerText = elementName;
    const ul = document.getElementById('ul');
    const ulLength = ul.children.length;
    if(ulLength < 5 ){
        ul.appendChild(li);
        element.li.listStyleType='number';
        element.setAttribute('disabled', '');
        element.style.backgroundColor = '#73452';
        
        return ;
    }else{
        alert('Please select 5 player !!!')
    }
}







//  Get input value 

   function getInputValuById(element){
      const perPlayerPrice = document.getElementById(element);
      const perPlayerPriceString = perPlayerPrice.value ;
      const perPlayerPriceNumber = parseFloat(perPlayerPriceString);
      perPlayerPrice.value = "";
      return perPlayerPriceNumber ;
      
   }


 // get text value

   
   function getTextValueById(textValueById){
      const textElement = document.getElementById(textValueById);
      const textElementString = textElement.innerText ;
      const textElementNumber = parseFloat(textElementString);
      return textElementNumber ;
   }
  

// Calculate perPlayer expense 

 document.getElementById('calculateBtn').addEventListener('click', function(){
    const totalPlayerExpense  = document.getElementById('playerExpense');
    const perPlayerPrice = getInputValuById('perPlayerPrice')
    const playerExpense = perPlayerPrice * 5 ;
    totalPlayerExpense.innerText = playerExpense ;
    

 })

 // Calculate  total game expense 

 document.getElementById('calculateTotal').addEventListener('click', function(){
    const totalCoast = document.getElementById('totalCoast');
    const manager = getInputValuById('managerCoast');
    const coach = getInputValuById('coachCoast');
    const totalPlayerExpense = getTextValueById('playerExpense');
    const totalGameCoast = manager + coach + totalPlayerExpense ;
    totalCoast.innerText = totalGameCoast ;

 })
 console.log(typeof(isNaN))
