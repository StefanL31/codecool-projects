function min(x, y) {
if (x > y) {
    return y;
} else {
    return x
}
}
function max(valuesList) {
let maxList = 0
    for (let i of valuesList){
        if (i > maxList) {
            maxList = i;
        }
    }
    return maxList;
}

function len(valuesList) {
let list = 0
    for (let i of valuesList){
        list++;
    }
    return list;
}

function multiply(x, y) {
    for (let i = 1; i < y; i++){
        x += x;
    }
    return x;
}

function pow(x, y) {
    let answer = 1
    for (let i = 1; i < y; i++) {
        x *= x;
    }
    return answer;
}

function divmod(x, y) {

}