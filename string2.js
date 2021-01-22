function megaFriend(name)
{
var max=name[0];
for(i=0;i<name.length;i++)
{
   var element=name[i];
   if(element.length>max.length){
       max=element;
   }
}
return max;



}
var output=megaFriend(['shuvo','trisha','protiva','bangladesh']);
console.log(output);