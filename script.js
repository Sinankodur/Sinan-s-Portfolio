function validateForm() {
    let nameValid = document.forms['myForm']['name'].value;
    let numValid = document.forms['myForm']['number'].value;

    const RegExpname = /[^a-z A-Z]/;
    const RegExpnum = /^[6-9]\d{9}$/;

    if (RegExpname.test(nameValid)) {
        alert('Name should be combined of letters only!')
        return false;
    }
    if (!(RegExpnum.test(numValid))) {
        alert('Services only available in India!')
        return false;
    }
    else {
        return true;
    }
}