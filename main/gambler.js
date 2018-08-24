var readline=require('readline');
var utility= require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function gambler()
{
    read.question("how many times you have to play:", function(userinput){
        utility.gambler(userinput);
        read.close();
    });
}
gambler();