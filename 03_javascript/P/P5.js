let i=Number(prompt('숫자를 입력하시오'))

for(let i=1; i <10000;i++){
    if(i%13 ===0 || i%2===1){
        alert('13의 배수 이면서 홀수 입니다')
    }else if(i%2===0){
        alert('13의 배수 이면서 홀수가 아닙니다.')
    }
    console.log(i)
}