npm - It install packages globally on your system
npx - It directly excutes a package without installing it

Create a new project (at path ./) : npx create-react-app ./

Document - html
Object - h1, p, input, a, tags
Model - html structure

Virtal Dom - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

Component - React components let you break up the user interface into seperate pieces that can be reused and handled independently.

Functional Component -

- functional components are basic javascript fuctions such as arrow functions, and anonymous functions.
- there is no render method used in functional components.
- these are mainly responsible for UI and are typically presentational only (for ex. a button component).
- functional components can accept and use props.
- functional components should be favoured if you do not neet to make use of React State.

Class Component -

- class components make use of ES6 class and extend the component class in React.
- Sometimes called "smart" and "stateful" components as they tend to implement logic anmd state.
- react lifecycle methods can be used inside class component (for ex. componentDidMount, componentDidUpdate, componentWillUnmount).
- you pass props down to class component and access that with this.props.

Props - Props stand for "Properties." They are read-only components. Props are arguments passed into React components

                    Props                               ||                             State
        Props get passed to the component               ||            State is managed into the component
        Props are immutable                             ||            State is mutable and can be changed
        props -> functional component                   ||            UseStateHook -> functional component
        this.props -> class component                   ||            this.state -> class component

yes you can use UseState in functional component also.

Hooks - Hooks allows you to use state and other React features without writing a class. Some built-in hooks are useState, useEffect.

- useEffect hook is a smooth combination of React’s lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount.
- sometimes, we want to run some code after the DOM has been updated. It can be anything, showing pop-ups, sending API requests, logging users’ information etc. and such functions don’t require cleanup to be performed. They are just hit-once functions and then we forget about them. Such places are the best examples to use the useEffect hook.

ContextAPI - contextAPI is an easy way to create global variables that canbe passed around in the react app and this is an alternative of prop drilling.

Redux - it creates a global state for the whole application, that can be accessed by any of your component
