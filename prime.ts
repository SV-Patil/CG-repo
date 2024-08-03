function isPrime(num:number){
    let flag = true;
    let i:number;
    for(i=0;i<num;i++){
        if(num%i==0){
            flag=false;
            console.log("Not prime")
            break;
        }
    }
}