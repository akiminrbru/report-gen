import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/project/'}),
    tagTypes: ['project'],
    endpoints: (build) => ({
        getAllProjects: build.query({
            query: () => ({
                url: "all",
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }),
            providesTags: [{type: 'project', id: 'list'}],
        }),
        getProject: build.query({
            query: (counter) => ({
                url: `get/${counter}`,
                method: "GET",
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }),
        }),
        createProject: build.mutation({
            query: ({counter, name, brands = ''}) => ({
                url: `set/${counter}`,
                method: "POST",
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                params: {
                    name,
                    brands
                }
            }),
            invalidatesTags: [{type: 'project', id: 'list'}],
        }),
    }),
});

export const { useGetAllProjectsQuery, useGetProjectQuery, useCreateProjectMutation } = projectsApi;