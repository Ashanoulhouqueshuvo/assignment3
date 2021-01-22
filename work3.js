
var rent=0;
function hotelCost(value){
if(value<=10)
{
    rent=value*100;
     
    
}
else if(value<=20)
{
 var firstTenDays= 10*100;
 var afterTenDays=value-10;
 var remaning =afterTenDays*80;
 rent=firstTenDays+afterTenDays+remaning;


}
else
{
    var firstTenDays=10*100;
    var afterTenDays=10*80;
    var remaning=value-20;
    rent=firstTenDays+afterTenDays+remaning; 
}

return rent;



}
var amount=hotelCost(14);
console.log(amount);


