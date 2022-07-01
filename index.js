function receivesAFunction(callback){
    return callback()
}



const returnsANamedFunction = () => {

    return function namedFunction() {}
}

returnsANamedFunction(function name(){return 2+2})

function returnsAnAnonymousFunction(cb){
    return function() {}
}


