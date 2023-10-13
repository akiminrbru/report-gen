import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

let post = {
    "login": "admin",
    "password": "123456"
}

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://report.rbru-test.ru/api/'}),
    endpoints: (build) => ({
        getAuth: build.query({
            query: (user) => ({
                url: 'login',
                method: 'POST',
                body: JSON.stringify(post)
            }),
            transformResponse: (response) => {
                console.log(response)
                localStorage.setItem('token', response.jwt)
            }
        })
    })
})

export const { useGetAuthQuery } = usersApi;