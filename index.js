var x = 18;
for (i = 2; i < x; i++) {
    if (x % i == 0) {
        console.log(x + " is Not Prime")
        break;
    }
    else {
        console.log(x + " is Prime")
        break;
    }
}