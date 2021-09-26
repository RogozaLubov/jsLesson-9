let arr = [1,2,3];

function func (elem){
    
     console.log(elem.splice(0,1)[0]);
     if(elem.length !== 0) func(elem);
}

func(arr);
