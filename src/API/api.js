import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const sendApi = createApi({
    reducerPath:"sendApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_GET_ART
    }),
    tagTypes:['Carts'],
    endpoints:(builder)=>({
        getAllCars:builder.query({
            query: ()=> "/carts",
            tagTypes:['Carts'],
        }),
        addCars:builder.mutation({
            query: (id)=> ({
                url:`/cars/cars/${id}`,
                method:"PUT",
                body:update
            })

        }),
        deleteCars:builder.mutation({
            query: (id)=> ({
                url:`/cars/${id}`,
                method:"DELETE",
                body:update
            }),
            invalidatesTags:['Carts']
            
            
        })
    })
})


export const {
    useGetAllCarsQuery,
 }
= sendApi
console.log(sendApi);