import {createAPi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '175bca488dmsh4f595737a8e1df4p1105d5jsn06dec74f930a'
}

const bareUrl='https://coinranking1.p.rapidapi.com/coins';

export const cryptoApi;

{/*var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '175bca488dmsh4f595737a8e1df4p1105d5jsn06dec74f930a'
  }
};

    },*/}