import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoGainerHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': 'aa2be3fd3cmsh3fef11c1bc0632bp1edd38jsn0060cdcb7079',
    'x-rapidapi-host': 'crypto-update-live.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoGainerHeaders });

const baseUrl = 'https://crypto-update-live.p.rapidapi.com';

export const cryptoGainerApi = createApi({
    reducerPath: 'cryptoGainerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoGainer: builder.query({
            query: () => createRequest(`/top-gainers-losers`),
        }),
    }),
});

export const { useGetCryptoGainerQuery } = cryptoGainerApi;