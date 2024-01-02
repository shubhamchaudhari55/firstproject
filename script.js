const search = document.querySelector('.search-input');
const inputBox = document.querySelector('.input');
const suggestionBox = document.querySelector('.box');


let suggestions = [
  "Shubham",
  "Hit",
  "Aman",
  "Ghubham",
  "Jhubham",
  "Ihubham",
  "Ohubham",
  "Phubham",
  "Yhubham",
  "Thubham",
  "Rhubham",
];

inputBox.onkeyUp = (e) =>{
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = suggestions.filter((data)=>{
      return data.toLocaleLowarCase().startsWith(userData.toLocaleLowarCase());
    });
    emptyArray = emptyArray.map((data)=>{
      return data = `<li>{data}</li>`;
    });
    console.log(emptyArray);
    search.classList.add('active');
    showSuggestions(emptyArray);
    let allList = suggestionBox.querySelectorAll("li");
    for(let i = 0; i < allList.length; i++){
      allList[i].setAttribute("onclick", "select(this)");
    }
  }
  else{
    search.classList.remove('active');
  }
}
function select(element){
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  search.classList.remove('active');
}

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = `<li>{userValue }</li>`;
  }
  else{
    listData = list.join('');
  }
  suggestionBox.innerHTML = listData;
}