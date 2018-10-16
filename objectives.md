# React: Shopping Cart Review & Connecting to APIs

## Objectives

* Review shopping cart component hierarchy
* Explain React component lifecycle methods
  * Identify lifecycle method to use for initial API calls
* Interact with an external API in React

## Resources

* [React Docs - Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [React Docs - ComponentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)
* [React Component Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Extra

* Product API Url: 'https://shopping-cart-backend.herokuapp.com/'
* [Component Hierarchy Diagram](https://www.lucidchart.com/invitations/accept/1929a4c0-145d-4590-94b1-e5800a6c5be3)

## Notes

* Explain React component lifecycle methods
  - Methods that are called by React at different times during a component's lifecycle (existence)
  - Can perform whatever logic we want to in these methods if we declare them in a *class* component
  - Not accessible from functional components
* Identify lifecycle method to use for initial API calls
  - componentDidMount()
  - Called after component is instantiated (created) and 'mounted' in the DOM
  - Safe to use setState()
* Interact with an external API in React
  - Make a fetch call in componentDidMount of your App.js!
    * (or another component if that component needs it's own data)