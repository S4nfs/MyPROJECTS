npm - It install packages globally on your system
npx - It directly excutes a package without installing it

Create a new project (at path ./)   :   npx create-react-app ./

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