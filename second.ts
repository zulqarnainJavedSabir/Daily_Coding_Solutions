// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

class program {
    static main() {
        let input = [1,2,3,4,5];
        console.log(input);  
        console.log(this.solve(input))     ;

    }
    static solve(input: number[]) :number[]  {
        
        let count: number = input.length;
        let preArr: number[]= [];
        let postArr: number[] = [];
        let result: number[] = [];
       count -= 1;
        console.log(count);
        preArr[0] = 1;
        postArr[count] = 1;
        for(let i = 1; i <= count; i++ ) {
                preArr[i] = preArr[i-1] * input[i-1];
                postArr[count-i] = postArr[count-i+1] * input[count-i+1];
        }
        for(let i=0; i<= count; i++) {
            result[i] = preArr[i] * postArr[i];
        }
        
        return result;
    }
}
program.main();
