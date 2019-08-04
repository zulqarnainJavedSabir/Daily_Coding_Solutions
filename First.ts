



// Daily Coding Problem: Problem #1

// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// Solution:
	
class solve {
     array : number[];
     constructor(...param: number[] ) {
        this.array = param;        
     }
     toString(): string {
        let str = "";
        for(let x of this.array) {
        str += x;
        }
        return str;
     }
     static test(arr: number[], x: number) : boolean {
         for(let y of arr) {
             if(x === y) return true;
         }
        return false;
     }
     check(input: number): boolean {
        let temp = [];
        let check = [];
        for(let i in this.array) {
            if(this.array[i] < input) {
                let cont = input - this.array[i];
                if(!solve.test(check,this.array[i]) && solve.test(temp,cont)) {
                    console.log(JSON.stringify(temp));
                    return true;
                } else {
                    check.push(this.array[i]);
                    temp.push(cont);
                }
            } else {
                continue;
            }
        }
        return false;
     }
}
var x : solve = new solve(1,2,2,3,4,5,6,7,8,9,100,2111);
console.log(x.toString());
console.log(x.check(109));
Zulqarnain Sabir <zulqarnainsabir982@gmail.com>
	
Thu, 1 Nov 2018, 13:54
	
to founders
updated for -ve values and repetition scenario.


class solve {
     array : number[];
     constructor(...param: number[] ) {
        this.array = param;        
     }
     toString(): string {
        let str = "";
        for(let x of this.array) {
        str += x;
        }
        return str;
     }
     static test(arr: number[], x: number) : boolean {
         for(let y of arr) {
             if(x === y) return true;
         }
        return false;
     }
     check(input: number): boolean {
        let temp = [];
        let check = [];
        for(let i in this.array) {            
                let cont = input - this.array[i];
                if(solve.test(check,this.array[i])) {
                    if(solve.test(check,cont)) {
                        return true;
                    }
                    continue;
                }
                if(solve.test(temp,cont)) {
                    console.log(JSON.stringify(temp));
                    return true;
                } else {
                    if(this.array[i] < 0) cont = this.array[i];
                    check.push(this.array[i]);
                    temp.push(cont);
                }         
        }
        console.log(JSON.stringify(temp));
        return false;
     }
}
var x : solve = new solve(-1,0,1,2,2,2111);
console.log(x.toString());
console.log(x.check(4));
