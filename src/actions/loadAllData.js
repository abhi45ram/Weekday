
export const loadAllData = (myFiters)=>{
   console.log("this is data",myFiters);
   const { limit, ...restFilters } = myFiters;

    return async (dispatch)=>{
        try{

            dispatch({
                type:'loadAllDataRequest'
            })
            const res = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON',{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "content-Type":"application/json"
                },
                Credential:'include',
                body :JSON.stringify({
                    limit,
                    "offset": 0
                })
            });
            let data= await res.json();
            data = data.jdList;
            if(myFiters.experience.length){
                data = data.filter(item => {
                    return (
                      item.minExp === myFiters.experience 
                    );
                  });
            }
            if(myFiters.role){
                data = data.filter(item => {
                    return (
                      item.jobRole === myFiters.role 
                    );
                  });
            }
            if(myFiters.location){
                data = data.filter(item => {
                    return (
                      item.location === myFiters.location 
                    );
                  });
            }
            if(myFiters.isRemote){
                data = data.filter(item => {
                    return (
                      item.jobRole === myFiters.isRemote 
                    );
                  });
            }
            if(parseInt(myFiters.minBasePay)){
                data = data.filter(item => {
                    return (
                      item.minJdSalary >= parseInt(myFiters.minBasePay)
                    );
                  });
            }

            if(res.status===200){
                dispatch({
                    type:'success',
                    payload:data
                })
            }else{
                dispatch({
                    type:'fail',
                })
            }
        }catch(err){
            dispatch({
                type:'fail',
            })
        }
    }
}