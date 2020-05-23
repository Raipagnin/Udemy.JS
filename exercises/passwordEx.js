
// Write is a validPassword function, where it accepts 2 arguments (username and password).
//Password must have NO SPACES, NOT EQUAL TO USERNAME, at least 8 chars. If it matches return true, otherwise false
//ex
//validPassword('89filjin', 'dogluver') // true
//validPassword('dogluver123', 'dogluver) //false

//you can do it like this, even though it has more lines, it's easier to read and understand
function validPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {     //indexof gives -1 when the element is not there
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }   
    return true
}
//shorter way
function valPassword(password, username) {
    if((password.length < 8) || (password.indexOf(' ') !== -1) || (password.indexOf(username) !== -1)) {
        return false
    }
    return true
}

//or u can create variables, in case u wanna use them later
function isValidPassword(password, username) {
    let tooSmall = password.length < 8;
    let spc = password.indexOf(' ') !== -1;
    let similar = password.indexOf(username) !== -1;
    if (tooSmall || spc || similar) return false;
    return true;
}

// u can also change false for true:
// if (!tooSmall && !spc && !similar) return true;
//improving a little bit would be:
// return !tooSmall && !spc && !similar;