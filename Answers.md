1. What problem does the context API help solve?

Context API helps move data where it is needed without having to prop drill through components that don't need access to the data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: users interfaceing with the applicattion. send the data to the reducer

Reducer: takes in actions and updates state based on those acitons and payloads

Store: where the data lives, drives the components

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is the data required for a single Component, such as an input form
Application state is data that is needed in multiple locations throughout our App, such as whether a user authenticated or not.
You decided on which to use based on where the data is needed.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a package that allows for async call. instead of returning an object in standar action-creators, thunk returns a function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the power of redux. The boilerplate is not that bad and it gives a platform to employ more advanced strats such as reducers and maybe a finite state machine pattern.
