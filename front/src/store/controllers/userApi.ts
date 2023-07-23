import { IUser } from "../../interfaces/IUser";
import { api } from "../api";

export const userApi  = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => "/users",
            providesTags: ["User"]
        }),

        deleteUser: builder.mutation<IUser, string>({
            query: (id: string)=> ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["User"]
        }),

    })
})

export const { useGetUsersQuery, useDeleteUserMutation} = userApi;