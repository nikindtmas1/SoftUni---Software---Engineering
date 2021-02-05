function sotrList(){
    let arrList = [];
    class List {
        constructor(num) {
            this.num = num;
        }
    add(num) {
        arrList.push(num);
    }
    remove(index) {
        arrList.splice(index, 1);
    }

    get(index) {
        return arrList[index];
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
}
sotrList();