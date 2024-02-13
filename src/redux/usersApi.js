import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/'}),
    endpoints: (build) => ({
        getAuth: build.mutation({
            query: (user) => ({
                url: 'login',
                method: 'POST',
                body: JSON.stringify(user)
            }),
        }),
        isAuth: build.mutation({
            query: (user) => ({
                url: 'project/all',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
        })
    })
})

export const { useGetAuthMutation, useIsAuthMutation } = usersApi;