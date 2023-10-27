import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/report/'}),
    tagTypes: ['report'],
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
        getReportGoals: build.mutation({
            query: (counter) => ({
                url: `get-goals/${counter}`,
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags: ['report'],
        }),
        getReportConversion: build.mutation({
            query: (sendData) => ({
                url: `get-conversion/${sendData.counter}`,
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                params: {
                    "goal": `${sendData.goal}`,
                    "dateform": `${sendData.datefrom}`,
                    "dateto": `${sendData.dateto}`
                },
            }),
            providesTags: ['report'],
        }),
        getReportConversionActive: build.mutation({
            query: (sendData) => ({
                url: `goal/${sendData.counter}`,
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                params: {
                    "id": `${sendData.id}`,
                    "active": `${sendData.active}`,
                },
            }),
            invalidatesTags: ['report'],
        }),
    })
})

export const { useGetAllReportsQuery, useGetReportQuery, useGetReportGoalsMutation, useGetReportConversionMutation, useGetReportConversionActiveMutation} = reportsApi;