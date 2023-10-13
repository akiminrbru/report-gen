import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/project/'}),
    endpoints: (build) => ({
        getAllProjects: build.query({
            query: () => ({
                url: "all",
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }),
        }),
    }),
});

export const { useGetAllProjectsQuery } = projectsApi;