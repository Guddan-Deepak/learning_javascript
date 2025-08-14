const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },2000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
})