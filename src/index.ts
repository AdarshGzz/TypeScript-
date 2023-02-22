///////// Vedio 2 ///////////

// let BooleanType : boolean = true;
// let NumberType : number = 100;
// let StringType : string = "Adarsh";

// let UndefinedType : undefined = undefined;
// let NullType : null = null;

// let SymbolType : symbol = Symbol('star');
// let BigIntegerType : bigint = 24n;

///////// Vedio 3 ///////////

// let regexp: RegExp = new RegExp('ab+c');

// let array: Array<number> = [1, 2, 3, 4];

// let set: Set<number> = new Set([1, 2, 3, 4, 4])

// // A first in first out collection

// class Queue<T> {
//     private data: Array<T> = [];
//     push(item: T) { this.data.push(item); }
//     pop(): T | undefined { return this.data.shift(); }
// }

// let queue: Queue<number> = new Queue();

///////// Vedio 4 ///////////

// ////Arrays
// let array : Array<number> = [1, 2, 3, 4];
// // anothe short way of defining an array
// let array1 : number[] = [1, 2, 3, 4];

// //usage
// array = [1];
// array = [1,2,3,4,5,6];
// array = ['name'] //Error: this is array of numbers

////Tupple
// let tupple : [number,number] = [5,6]

// //usage
// tupple = [1] // Error: must be 2 items 
// tupple = [2,5]
// tupple = [1,1]
// tupple = [2,4,5] // Error: must be only two items

///////// Vedio 5 ///////////

// //// objects
// type Point = {x:number,y:number}

// let center: Point = {
//     x : 0,
//     y : 0
// }

// let xAxis: Point = {
//     x: 1,
//     y: 0$
// }

///////// Vedio 6 ///////////
// functions in typeScirpt

// function add (a:number, b:number) : number {
//     return a + b;
// }
// add(1,2) //3

// function log(message:string) : void {
//     console.log(message);
// }

// function sum(...values:number[]){
//     return values.reduce((previous , current) =>{
//        return previous + current;
//     })
// }
// sum(1,4) //5
// sum(1,5,3,9) //18

// type sub = (a: number, b: number) => number

// let subtract : sub

// subtract = function(a:number, b:number):number{
//     return a - b;
// }


///////// Vedio 7 ///////////
// //// DuckTyping

// type Point2D = {x: number, y: number};
// type Point3D = {x: number,y: number,z: number};

// let point2D : Point2D = {x: 0, y: 0};
// let point3D : Point3D = {x: 1, y: 1, z:1}

// // since extra information is ok
// point2D = point3D ;
// function takesPoint2D(point:Point2D){ /* ----- */}
// takesPoint2D(point3D)

// // Error : missing information
// point3D = point2D
// function takesPoint3D(point:Point3D){ /* ----- */}
// takesPoint3D(point2D)


///////// Vedio 9 ///////////
////Classes 

// class Animals {
//     // private name : string;

//     protected name : string;

//     constructor(name:string){
//         this.name = name;
//     }

//     public move(distanceInMeters:number):void {
//         console.log(`${this.name} moved to ${distanceInMeters}m.`)
//     }
// } 

// let cat = new Animals('Cat');
// cat.move(10)
// cat.name //Error : protected

// // class inheritance
// class Birds extends Animals{
//     fly(distanceInMeters:number):void{
//         console.log(`${this.name} flew ${distanceInMeters}m.`)
//     }
// }

///////// Vedio 10 ///////////
// //// Generics
// class Queue<T>{
//     data = [];
//     push(item:T) {this.data.push(item)}
//     pop(): T {return this.data.shift() }
// }

// const queue = new Queue<number>();
// queue.push(38)
// queue.push(36)
// queue.push(34)
// queue.push(33)
// queue.push(32)

// console.log(queue.data)

///////// Vedio 11 ///////////
////Any & unknown

