import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/report/'}),
    endpoints: (build) => ({
        getReport: build.query({
            query: () => 'get/57270913/10',
        })
    })
})

export const { useGetReportQuery } = reportsApi;