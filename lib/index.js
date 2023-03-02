"use strict";
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
// ////Any & unknown
// let exampleAny : any;
// let exampleUnknown : unknown;
// // any
// exampleAny = 139;
// exampleAny = 'anything';
// //usage
// exampleAny.allows.anything.you.can.imagine();
// let setBool : boolean = exampleAny;
// // unknown
// exampleUnknown = 393;
// exampleUnknown = 'unknownThing';
// //usage
// //if you want to use it a string or boolean firstly you have to cheack its 
// // type
// if(typeof exampleUnknown == 'string'){
//     exampleUnknown.trim(); 
// }
// if(typeof exampleUnknown == 'boolean'){
//    let setUnknownBool : boolean = exampleUnknown; 
// }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// function createObject(name:string,isPaid:boolean):{name:string;isPaid:boolean}{
//     return { name: `${name}`, isPaid:isPaid }
// }
// console.log(createObject('null',false))
// //////
// type BankDetails = {
//     name:string
//     accountNumber:number
// }
// type cardDetails ={
//     cardNumber:number
//     cardId:string
// }
// type bankAccountInfo = BankDetails & cardDetails & {
//     branch:string
// }
// let AccountInfo:bankAccountInfo = {
//     name:'adara',
//     accountNumber:3849380,
//     cardNumber:84930,
//     cardId:'dfhdjfk',
//     branch:'adara'
// }
// console.log(AccountInfo)
// ////////////////
// const superHero:string[] = []
// const Hero : Array<number> = []
// superHero.push('ironman')
// Hero.push(33)
// console.log(superHero)
// console.log(Hero)
// type User = {
//     name:string
//     isActive:boolean
// }
// const allUser : User[] = []
// allUser.push({name:"adarsh",isActive:true})
// allUser.push({name:"adarsh1",isActive:false})
// allUser.push({name:"adarsh2",isActive:true})
// console.log(allUser)
// //////////////////////////////////
// let score : number | string = 44
// score = 33
// score = "adarsh"
// type User = {
//     name: string
//     id:number 
// }
// type Admin = {
//     username: string
//     id:number 
// }
// let Adarsh: User | Admin ={
//     name:'Adarsh',id:329039
// }
// Adarsh = {username: 'Adarsh930',id:34399039}
// console.log(Adarsh)
// function getDbId(id:number | string){
//     if(typeof id === "string"){
//         console.log(id.toUpperCase())
//     }else{
//         console.log(id)
//     }
// }
// getDbId(45)
// getDbId("djkfl")
// const data : number[] = [2,4,6,4]
// const data2 : string[] = ['3','5']
// const data3 : (number|string|boolean)[] = [1,"4",true,"3"]
// let seatAllotment : "alise" | "middle" | "window"
// seatAllotment = "alise"
// console.log(seatAllotment)
// let tuple : [string,number,boolean] = ["Adarsh",38,true]
// const enum E1{
//     x=1,
//     y,
//     z
// }
// let enumValue = E1.y
// console.log(enumValue)
// //////////////////////////////////////////////////////////////////
// interface User{
//     readonly dbId: number
//     email : string
//     userId : number
//     googleId? : string
//     // trail: () => string
//     trail(): string
//     getCoupon(coupon: string,value:number): number
// }
// interface User{
//     githubToken:string
// } 
// interface Admin extends User{
//     role:'admin'|'ta'|'learn'
// }
// const Adarsh: Admin = {
//     dbId:4,email:"Adarsh930",
//     userId:94,
//     trail:()=>{return "trail"},
//     getCoupon:(couponname:'adarsh10',off:10) => { return off},
//     githubToken:'github',
//     role:'learn'
// }
// console.log(Adarsh)
// //////////////////////////////////////////////////////////////////////////
// class User{
//     public email:string
//     private name:string
//     readonly city:string = 'shahdol'
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
// class User{
//     private _courseCount:number = 1
//     readonly city:string = 'shahdol'
//     constructor(
//         public email:string,
//         private name:string,
//         private userId :number
//         ){
//     }
//     private deleteToken(){
//         console.log('token deleted');
//     }
//     get getAppleEmail():string { return `apple${this.email}` }
//     get courseCount(): number{ return this._courseCount}
//     set courseCount(courseNum) {
//         if(courseNum<=1){
//             throw new Error('course count should be more than 1')
//         }
//         this._courseCount = courseNum
//     }
// }
// const Adarsh = new User("a@a.com", 'Adarsh',77)
// console.log(Adarsh)
// class subUser extends User {
//     familyMember:string = 'brother'
//     changeCourseCount(){
//         // this._courseCount = 4
//     }
// }
// //////////////////////////////////////////////////////////////////
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }
// interface Story{
//     createStory():void
// }
// class instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){
//     }   
// }
// class youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public shorts: string,
//     ){}
//     createStory(): void {
//         console.log('story created')
//     }
// }
