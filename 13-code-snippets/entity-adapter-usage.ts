import { createEntityAdapter } from "@reduxjs/toolkit";
import { User } from "./types";
const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors<RootState>((state) => state.users);
