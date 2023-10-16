import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/report/'}),
    endpoints: (build) => ({
        getAllReports: build.query({
            query: (counter) => ({
                url: `all/${counter}`,
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }),
        }),
        getReport: build.query({
            query: () => ({
                url: "get/57270913/10",
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }),
        }),
    })
})

export const { useGetAllReportsQuery, useGetReportQuery } = reportsApi;