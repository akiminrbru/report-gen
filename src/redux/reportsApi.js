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
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
        }),
        getReport: build.query({
            query: () => ({
                url: "get/57270913/10",
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
        }),
        getReportGoals: build.query({
            query: (counter) => ({
                url: `get-goals/${counter}`,
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
        }),
        getReportConversion: build.query({
            query: ({counter, goal_id, datefrom, dateto}) => ({
                url: `get-conversion/${counter}`,
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                params: {
                    "goal-id": goal_id,
                    "dateform": datefrom,
                    "dateto": dateto
                }
            }),
        }),
    })
})

export const { useGetAllReportsQuery, useGetReportQuery, useGetReportGoalsQuery, useGetReportConversionQuery} = reportsApi;