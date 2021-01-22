//var name='';

function megaFriend(name)
{
    //var name='';
   var max=name[0];
 for(var i=0;i<name.length;i++)
{
 var element=name[i];
 if(element.length>max.length)
 {
   max=element;


 }


//return max;


}
return max;


}
var newName = megaFriend(['Protiva Kanom Promi','Liza Akter','Bangladesh is my country']);
console.log(newName);