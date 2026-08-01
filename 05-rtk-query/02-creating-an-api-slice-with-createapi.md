# createApi

```js
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => "/users" }),
    addUser: builder.mutation({
      query: (user) => ({ url: "/users", method: "POST", body: user }),
    }),
  }),
});
```
