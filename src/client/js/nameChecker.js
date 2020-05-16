function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const regex = /^[A-Za-z][A-Za-z0-9]*/; // can't start with a number
    if(regex.test(inputText)){
        return true
    }else{
        return false
    }
}

export { checkForName }
