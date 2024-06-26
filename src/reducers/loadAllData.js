export const initialProductDetails = {};
// Reducer function for loading all data
const loadAllData = (state = initialProductDetails,action)=>{
    if(action.type === 'loadAllDataRequest'){
        return{
            loading:true,
            data:state
        }
    }else if(action.type === 'success'){
        return {
            loading:false,
            jobsData:action.payload
        };
    }else{
        return state
    }
}

export default loadAllData