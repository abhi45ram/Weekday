export const loadAllData = (myFilters, limit) => {
    return async (dispatch) => {
        try {
            // Dispatch action to indicate loading request
            dispatch({
                type: 'loadAllDataRequest'
            });

            // Fetching data from given Api in assignment
            const res = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "content-Type": "application/json"
                },
                Credential: 'include',
                body: JSON.stringify({
                    "limit": limit,
                    "offset": 0
                })
            });

            // Parse response data
            let data = await res.json();
            data = data.jdList;

            // Filter data based on provided filters
            if (myFilters.experience) {
                data = data.filter(item => {
                    return item.minExp >= parseInt(myFilters.experience);
                });
            }
            // Filter by role
            if (myFilters.role) {
                data = data.filter(item => {
                    return (
                        item.jobRole === myFilters.role
                    );
                });
            }
            // Filter by location
            if (myFilters.location) {
                data = data.filter(item => {
                    return (
                        item.location === myFilters.location
                    );
                });
            }
            // Filter by company name
            if (myFilters.companyName) {
                data = data.filter(item => {
                    return (
                        item.companyName.toLowerCase().includes(myFilters.companyName.toLowerCase())
                    );
                });
            }
            // Filter by remote/onsite
            if (myFilters.isRemote) {
                if (myFilters.isRemote === 'remote') {
                    data = data.filter(item => {
                        return item.location.toLowerCase() === 'remote';
                    });
                } else if (myFilters.isRemote === 'onsite') {
                    data = data.filter(item => {
                        return item.location.toLowerCase() !== 'remote';
                    });
                }
            }
            // Filter by minimum base pay
            if (parseInt(myFilters.minBasePay)) {
                data = data.filter(item => {
                    return (
                        item.minJdSalary >= parseInt(myFilters.minBasePay)
                    );
                });
            }

            // Dispatching success action with filtered data if API request is successful
            if (res.status === 200) {
                dispatch({
                    type: 'success',
                    payload: data
                });
            } else {
                // Dispatching fail action if API request is unsuccessful
                dispatch({
                    type: 'fail',
                });
            }
        } catch (err) {
            dispatch({
                type: 'fail',
            });
        }
    }
}
