// const set = new Set()
// let nums = [1, 2, 3, 4]
// let obj = {a:1,b:2}

// set.add(1)
// set.add(1.2)
// set.add('hello')
// set.add(false)
// set.add(null)
// set.add(undefined)
// set.add(Symbol())
// set.add(nums)
// set.add(obj)

//  set.size
//  console.log(set)
//  set.delete(nums)

//  set.clear()
//  console.log(set)

// const myWeakset = new WeakSet()

// let obj1 = {name: 'John'};
// let obj2 = {name: 'Jane'};

// myWeakset.add(obj1)
// myWeakset.add(obj2)

// obj1 = null
// obj2 = null
// console.log(myWeakset)

// const myMap = new Map()
// const nums  = [1,2,3,4,5]
// myMap.set('hey','hello')
// myMap.set('hello', 1)
// myMap.set('1',"string")
// myMap.set(null,nums)

// console.log(myMap.get('hello'))

// // get,
// // set,
// // has,
// // delete,
// // clear

// console.log(myMap)

// const myWeakmap = new WeakMap()
// let obj1 = {name:"hello"}
// let obj2 = {a:1}
// myWeakmap.set(obj1,'hello')
// myWeakmap.set(obj2,[1,2,3,4])

// obj1 = null

// console.log(myWeakmap)
// const obj = {
//     name:"alameen"
// }

// console.log(Object.getOwnPropertyNames(obj))

function* myGenerator(arr) {
  let i = 0;
  while (i < arr.length) {
    if(arr[i] % 2 === 0)
    yield arr[i];
    i++;
  }
}

const iterator = myGenerator([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());




