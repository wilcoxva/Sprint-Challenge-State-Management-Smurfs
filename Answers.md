1. What problem does the context API help solve?

    React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information that send data from your application to your store.  A reducer is a function that determines changes to an application's state.  A store holds the whole state tree of your application.  The single source of truth is our store (not rewritten or reshaped). It gives us the availability to easily retrieve information in constant time and maintain a clean structure for the state of our application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the "global" state that all components in the component tree can access.  Component state is state that is local to a single component and cannot be seen outside of this component. When you only need to pass props down one level it would be good to use component state.  In a case where you're passing data along to all different places application state would be the way to go.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Context API.  It is more simple and easy to use.