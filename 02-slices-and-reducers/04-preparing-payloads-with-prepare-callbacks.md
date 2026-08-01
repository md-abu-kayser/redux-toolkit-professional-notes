# Prepare Callbacks

Customize action payload: `addTodo: { reducer(state, action) {...}, prepare(text) { return { payload: { id: nanoid(), text } } } }`.

> 📘 Next: [Initializing State & Resetting](05-initializing-state-and-resetting.md)
