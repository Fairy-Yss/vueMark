const data = {
    obj:{
        a:1,
        b:2
    }
}

Object.defineProperty(data,"obj",{
    get(){
        //console.log("1111")
    },
    set(){

    }
})
console.log(data.obj);