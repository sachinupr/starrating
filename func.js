
let aa=document.querySelector('#a');
let bb=document.querySelector('#b');
let cc=document.querySelector('#c');
let dd=document.querySelector('#d');
let ee=document.querySelector('#e');
let res=document.querySelector('#result');

let restart=document.querySelector('#again');
restart.addEventListener('click',reset);

aa.addEventListener('click',one);
bb.addEventListener('click',two);
cc.addEventListener('click',three);
dd.addEventListener('click',four);
ee.addEventListener('click',five);

function one()
{
    reset();
    aa.style.color='yellow';
    res.innerHTML="you rated 1 Star";
}
function two()
{
    reset();
    aa.style.color='yellow';
    bb.style.color='yellow';
    res.innerHTML="you rated 2 Star";
}
function three()
{
    reset();
    aa.style.color='yellow';
    bb.style.color='yellow';
    cc.style.color='yellow';
    res.innerHTML="you rated 3 Star";
}
function four()
{
    reset();
    aa.style.color='yellow';
    bb.style.color='yellow';
    cc.style.color='yellow';
    dd.style.color='yellow';
    res.innerHTML="you rated 4 Star";
}
function five() 
{
    reset();
    aa.style.color='yellow';
    bb.style.color='yellow';
    cc.style.color='yellow';
    dd.style.color='yellow';
    ee.style.color='yellow';
    res.innerHTML="you rated 5 Star";
}

function reset()
{
    res.innerHTML="Please Rate it";
    aa.style.color='black';
    bb.style.color='black';
    cc.style.color='black';
    dd.style.color='black';
    ee.style.color='black';
}

