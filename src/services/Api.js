/**
 * @about auth api file that contains login function
 * that get data from servers
 */

import axios from "axios";
const authKey = "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk="









//common for all api
export const _Api = (methodType, endPoint, request = '', query = '') => {
    try {
        return new Promise((resolve, reject) => {
            let Cmp_Url = `${endPoint}`


            var url_stringparams = window.location.href
            var url_params = new URL(url_stringparams);

            let token_url = url_params.searchParams.get("token");

            axios({
                method: methodType,
                url: `${Cmp_Url}${query}`,
                data: request,
                headers: {
                    "Authorization": authKey,
                    'Content-Type': "application/x-www-form-urlencoded",
                    accessToken: token_url ? token_url : localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : ''
                }
            }).then(resp => {
                if (resp.data.statusCode) {
                    resolve(resp.data)
                }
                else {
                    if (resp.data.error && resp.data.error.errorCode == 2 || (resp.data.error && resp.data.error.errorCode == 17)) {
                        localStorage.clear()
                        // history.push("/")
                        // Cookies.remove("u_dubugg", { path: '/', domain: siteSetting.domain })
                        // Cookies.remove("ex_dubugg", { path: '/', domain: siteSetting.domain })
                        // Cookies.remove("exhibition_id", { path: '/', domain: siteSetting.domain })
                        window.location.reload()
                    }
                    // resolve(resp.data)
                    reject(resp.data)
                }
            }).catch(err => {
                reject(err)
            }

            )
        })

    }
    catch (err) {

    }
}


// export const _Api2 = (methodType, endPoint, request, query = '') => {
//     let Cmp_Url = `${url}${endPoint}`
//     let headers = {
//         "Authorization": authKey,
//         'Content-Type': 'application/x-www-form-urlencoded',
//         accessToken: localStorage.getItem("accessToken")
//     };
//     return axios.post(`${Cmp_Url}${query}`, request, { headers: headers })
// }

// export const _ApiMultipart = (methodType, endPoint, request) => {
//     //console.log('request',request);

//     let Cmp_Url = `${url}${endPoint}`
//     let headers = {
//         "Authorization": authKey,
//         'Content-Type': 'multipart/form-data',
//         accessToken: localStorage.getItem("accessToken")
//     };
//     return axios.post(`${Cmp_Url}`, request, { headers: headers })
// }











