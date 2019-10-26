function tryTest(){
    try {
        return 5
    } catch (error) {
        console.log(error.message,'err');
    } finally{
        console.log('fin');
    }
}

var val = tryTest();
console.log(val);
