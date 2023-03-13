import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': 'aa2be3fd3cmsh3fef11c1bc0632bp1edd38jsn0060cdcb7079',
    'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/api/search/NewsSearchAPI?q=${newsCategory}&pageNumber=1&pageSize=${count}&autoCorrect
            =true`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;