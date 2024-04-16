// fill in javascript code here
let myForm = document.querySelector('form')
let Name =  document.getElementById('name');
let id = document.getElementById('employeeID');
let department = document.getElementById('department');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let num = document.getElementById('mbl')
let tableBody = document.querySelector('tbody');

let allData = [];

myForm.addEventListener('submit', function(e){
    e.preventDefault()

    let obj = {}
    obj.name = Name.value;
    obj.id = id.value;
    obj.department = department.value;
    obj.exp = exp.value;
    obj.email = email.value;;
    obj.num = num.value;

    allData.push(obj);
    tableBody.innerHTML = null;

    allData.map((e)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let deletebtn = document.createElement('td');
        deletebtn.className = 'deletebtn'

        deletebtn.innerText = 'Delete';
        deletebtn.addEventListener('click', function(){
            allData.splice(1);
            tableBody.removeChild(row);
        })

        td1.innerText = e.name;
        td2.innerText = e.id;
        td3.innerText = e.department;
        td4.innerText = e.exp;
        td5.innerText = e.email;
        td6.innerText = e.num;
        td7.innerText = roleFinder(td4.innerText);

        row.append(td1, td2, td3, td4, td5, td6, td7, deletebtn) ;
        tableBody.append(row)

        myForm.reset()
    })
})

function roleFinder(experience){
    if(experience > 5){
        return 'Senior'
    }else if(experience >= 2 && experience < 5){
        return 'Junior'
    }else if(experience >= 1){
        return 'Fresher'
    }
}
