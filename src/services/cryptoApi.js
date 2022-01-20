import {createAPi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '175bca488dmsh4f595737a8e1df4p1105d5jsn06dec74f930a'
}

const bareUrl='https://coinranking1.p.rapidapi.com/coins';

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({

    reducerPath:'cryptoApi',
    baseQuery:getchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
    getCryptos:builder.query({
        query:()=>createRequest('/exchanges')
    })
    })
});
