let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let workbutton = document.getElementById('organization');
let homebutton = document.getElementById('homme');
let schoolbutton = document.getElementById('education');
workbutton.style.backgroundColor = 'white';
homebutton.style.backgroundColor = '#f0ecfc';
schoolbutton.style.backgroundColor = '#f0ecfc';
div1.style.display = 'block';
div2.style.display = 'none';
div3.style.display = 'none';


function divone(){
    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
    workbutton.style.backgroundColor = 'white';
    homebutton.style.backgroundColor = '#f0ecfc';
    schoolbutton.style.backgroundColor = '#f0ecfc';
}
function divsecond(){
    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    workbutton.style.backgroundColor = '#f0ecfc';
    homebutton.style.backgroundColor = 'white';
    schoolbutton.style.backgroundColor = '#f0ecfc';
}
function divthird(){
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
    workbutton.style.backgroundColor = '#f0ecfc';
    homebutton.style.backgroundColor = '#f0ecfc';
    schoolbutton.style.backgroundColor = 'white';
}

