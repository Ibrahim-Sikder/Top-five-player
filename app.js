
function selectedTopPlayer(element){
    const elementName = element.parentNode.children[0].innerText;
    const li = document.createElement('li');
    li.innerText = elementName;
    const ul = document.getElementById('ul');
    const ulLength = ul.children.length;
    if(ulLength < 5 ){
        ul.appendChild(li)
        element.setAttribute('disabled', '');
        element.style.backgroundColor = '#73452';
        
        return ;
    }else{
        alert('Please select 5 player !!!')
    }
}







