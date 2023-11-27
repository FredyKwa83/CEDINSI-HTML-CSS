const promesa = new Promise((resolve, reject) =>{

})

console.log(promesa)

function simulacionAsync(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let flag = true;

            if(flag){
                resolve("Operacion exitosa")
            }else{
                reject(new Error("Hubo un error"))
            }
        }, 2000)
    })
}

simulacionAsync().then(resultado =>{
    console.log(resultado)
}). catch(error =>{
    console.error(error)
})