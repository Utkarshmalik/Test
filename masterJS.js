var someName = "utkarsh";


console.log(global.someName);

function sayMyName() {
  console.log(this);
}

window.sayMyName();