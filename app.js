const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
         count ++;
         const placeName = event.target.parentNode.childNodes[1].innerText;
         const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
         

         const selectedContainer = document.getElementById('selected-place-container');

         const li = document.createElement('li');
         const p = document.createElement('p');
         p.innerText = placeName;
         const p2 = document.createElement('p');
         p2.innerText = price;

         li.appendChild(p) 
         li.appendChild(p2) 

         selectedContainer.appendChild(li);


         const totalCost = document.getElementById('total-cost').innerText;
         const convertedTotalCost = parseInt(totalCost);
         const sum = convertedTotalCost + parseInt(price);
        //  document.getElementById('total-cost').innerText = sum;

        const grandTotalCost = document.getElementById('grand-total').innerText;
        const convertedGrandTotalCost = parseInt(grandTotalCost);
        const sum2 = convertedGrandTotalCost + sum;

        setInnerText('total-cost',sum);
        setInnerText('grand-total',sum2);

        setInnerText('cart-count',count);
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
    // console.log(id,value)
}