module.exports={
    hello : function(userinput)
    {
        
        console.log("type your user name");
        console.log("Hey "+userinput+ " how are you");
    },
leapcheck: function (userinput)
{
    if (userinput%400===0 && userinput%100!==0)
    {
        console.log("leap year");
        
    }
    else if(userinput%4===0)
    {
        console.log("leap year");
    }
    else
    console.log("not a leap year");
},
coin: function(userinput)
{
    let n=0,x=0,y=0,a,b;
    
    for(let i=1;i<=userinput;i++)
    {

         n=Math.random();
         //console.log(n);
         //console.log("the ramdom outputs are"+n);
         if(n>=0.5)
         {
             x++;
             console.log("head");
         }
         else
         {
             y++
             console.log("tail");
         }

    }
    var hp=(x/userinput)*100;
    console.log("the head % is :"+hp+"%");
    var tp=(y/userinput)*100;
    console.log("the tail % is :"+tp+"%");
},
powerof2:function(userinput)
{
    var i,count,number;
    count=1;
    for(i=1;i<=userinput;i++)
    {
        number=2*count;
        console.log("2 ^ "+i+"="+number);
        count=number;

    }
},
harmonic: function(userinput)
{
    var sum=0,i,j,n,c;
    for(i=1;i<=userinput;i++)
    {
        sum+=1/i;
        
    }
    console.log("the harmonic number is "+sum);
},
gambler: function(userinput)
{
    var startingbalance=5,goal=11,i;
    var win=0,lost=0;
    if(startingbalance<=goal && startingbalance>=0)
    {
        for(i=1;i<=userinput;i++)
        {
            var n=Math.random();
            //console.log(n);
            if(n>=0.5)
            {
                win++;
                console.log("WIN     so current balance= "+(++startingbalance));
            }
            else
            {
                lost++;
                console.log("LOST    so current balance= "+(--startingbalance));
            }

        }
        

    } 
    else
    {
        console.log("sorrry you cant play");
    }
    console.log("number of wins:"+win);
    console.log("number of loss:"+lost);
    console.log(" wins % :"+((win/userinput)*100));
    console.log(" loss % :"+((lost/userinput)*100));
    
},
primefactor:function(number)
{
    var primeFactor=[];
    while( number%2==0)
    {
        primeFactor.push(2);
        number=number/2;
    }
    var sqrtnum=Math.sqrt(number);
    for(var i=3;i<=sqrtnum;i++){
    while(number %i==0)
    {
        primeFactor.push(i);
        number=number/i;

    }
}
if(number>2)
{
    primeFactor.push(number);
    

}
console.log(primeFactor);



}

}