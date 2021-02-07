// function sotrList(){}
// sotrList();
    //let arrList = [];
    class List {
        constructor() {
            this.list = [];
            this.size = 0;
    }
    add(num) {
        this.list.push(num);
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
        return this.list;
    }
    remove(index) {
       
        if (index >= 0 && index <= this.size) {
            this.list.splice(index, 1);
            this.size = this.list.length;
            this.list.sort((a, b) => a - b);
            return this.list;
        }
    }

    get(index) {
     
        if (index >= 0 && index <= this.size) {
            return this.list[index];
        }
    }

}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
