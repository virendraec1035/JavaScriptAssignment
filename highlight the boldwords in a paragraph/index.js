var bold_items;
window.onload=getBold_items;

function getBold_items()
{
    bold_items=document.getElementsByTagName('strong');
}

function highlight(){
    for(var i=0; i<bold_items.length; i++)
    {
        bold_items[i].style.color="lightgreen";
    }
}

function normal()
{
    for(var i=0; i<bold_items; i++)
    {
        bold_items[i].style.color="black";
    }
}