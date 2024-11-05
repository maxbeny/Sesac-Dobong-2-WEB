/*for문 (무조건 ; 세미콜론으로 나눠야 함)
for(변수 선언과 초기화;조건식(어디까지 감소, 증가 할건지);증감){
    반복 실행 코드
}
*/

// 증감식: i++, i=i+1, i+=1 (다 동일한 의미)

for(let i=0;i<10;i++){
    console.log('hello',i)
}

for(let i=0;i<10;i=i+2){
    console.log(`안녕 ${i}`)
}

// 1 ~ 5 까지 출력하는 방법!
for(let i= 1; i<=5; i++){
    console.log(i)
}

for(let i =1; i < 6; i++){
    console.log(i)
}

for(let i = 0; i <5; i++){
    console.log(i+1)
}

// 5 ~ 1 까지 출력 
for(let i =5; i > 0; i --){
    console.log(i)
}

let fruits = ['apple','banana', 'orange', 'mango']
console.log(fruits.length)
// fruits 전체 요소 for문을 이욯해서 출력
for(let i = 0;i < fruits.length;i++){
    console.log(fruits[i])// 0,1,2,3
}

// quiz!
// 1 ~ n까지 더학
let n =11
let sum=0;
// 반복문을 사용해서 덧셈 만들기
/*
3
sum - 0
sum = sum + 1 > 1
sum = sum + 2 > 3
sum = sum + 3 > 6
*/
for(let i =1; i <= n; i++){
    sum = sum + i
}
console.log(sum)

let arr =[99,98,85,77,100,50]
// 배열 내부의 합 구하기

let sum2=0
for(let i =0;i<arr.length ; i++){
    sum2+=arr[i]
}
console.log(sum2)

// 1이상 20이하의 수 중에서
// 짝수만 더한 값 출력하기
let sum4 = 0
for(let i =1; i<=20;i++){
    if(i%2===0){
        sum4+=i
    }
}

console.log(sum4)


let sum3=0
let abc =[2,4,6,8,10,12,14,16,18,20]
for(let i =0;i<abc.length ; i++){
    sum3+=abc[i]
}
console.log(sum3)

let sum5 = 0
for(let i=0; i<=20;i=i+2){
    sum5+=i
}
console.log(sum5)