
// console.log(email);
// import {email, pass} from './loginHandle';

console.log(window.test);

addCar = () =>{
    var plate = document.getElementById('plateNum').value;
    var car = document.getElementById('carName').value;
    var table = document.getElementById('table');


    if(plate !== '' && car !== ''){

        var amount = 100;
        document.getElementById('hide-this').style.display = "none";
        document.getElementById('table').style.display = 'block';

        var row = table.insertRow();

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        // insert
        cell1.innerHTML = car;
        cell2.innerHTML = plate;
        // cell3.innerHTML = <p>LMAO</p>
        cell3.innerHTML = 
        `<a href = './payment'> ${amount} </a>`;
        
    }
    else{
        window.alert('The Field can not be null');
    }

    event.preventDefault();
}



{/* <script src = './loginHandle.js'></script> */}