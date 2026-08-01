# Basic Selectors & createSelector

`createSelector` from Reselect: memoized selectors that recompute only when inputs change.

```js
const selectCompleted = createSelector([(state) => state.todos], (todos) =>
  todos.filter((todo) => todo.completed),
);
```
