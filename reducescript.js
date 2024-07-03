const number=[1,2,3,4,5,6,7,8,9,10]
    const reducen=number.reduce((acc,val,idx,accarry)=>{return acc+val},2)
    console.log(reducen);



    setTimeout(()=>{
        console.log("hello world");
    },1000)

    ///this ->keyword 



    //function factory method

    function car(name,model,year) {
        return{
        infocar:function(){
            console.log(`the car name is ${name} 
                and the model is ${model} and the year is ${year}`);
        }


        }
        
    }

const cardet = car ("audi","A6",2020)
cardet.infocar()


//Constructor 
function Car(name,model,year){
    this.name=name,
    this.model=model,
    this.year=year,
    this.infocar=fuction(){
        console.log(47777558);
    }
}
