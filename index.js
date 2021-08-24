// Your code here
function saturdayFun(act="roller-skate"){
    return `This Saturday, I want to ${act}!`
}

function mondayWork(act="go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(string="*"){
    return function(e="special"){
        return `You are ${string}${e}${string}!`
    }
}

let Calculator = {add: function(){return 1 + 3},
subtract: function(){return 1 - 3},
multiply: function(){return 1 * 3},
divide: function(){return 10/5}}

function actionApplyer(baseNumber, array){
 if(array === []){
     return baseNumber
 }else{
     for(let i = 0; i < array.length; i++){
         baseNumber = array[i](baseNumber)
     }
     return baseNumber
 }
}