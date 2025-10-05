function forloop(){
    let i=1;
    for(i; i<=10; i++){
        console.log(i);
    }
}
function whileloop(){
    let i=0;
    while(i<=5){
       
        console.log(i);
      i++;  
    }
}
function forofloop(){
    let names=["James","Carl","Richard","Maria"];
    for(const n of names){
        console.log(n);
    }
}
function foreachloop(datas){
    datas.forEach((data,index)=>{
        console.log(data + " : " + index);
    })
}

function datamap(datas){
    datas.map((data,index)=>{
        console.log(data + " : " + index);
    })
}