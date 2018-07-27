export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const FETCH_VEHICLE= 'FETCH_VEHICLE';
export function fetchVehicle(registration) {    
    console.log("calling fetch");
    $.ajaxSetup({
        headers:{
           'ProductId': "6425B184-844F-4E29-8C67-C8A9A3401BA9"
        }
     });
    const request = $.get("http://dev.service.vehiclelookup.dayinsure.local/api/vehiclelookup/getvehicle?registrationnumber=j6mlo&fromCache=false&productenquiryid=30783a20-d306-417a-a7d5-1cdbf78f69b6");

    return {
        type: FETCH_VEHICLE,
        payload: request
    };
}