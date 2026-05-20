import { useState } from "react"

export const Home = () => {

    let [count, setCount] = useState(0);

    return (
        <>
        {/* Fragments are used in react without adding extra node to the dom */}
        <center>
            <h1>Counter application</h1>
            <h3>Count value: {count}</h3>
            <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger m-2" onClick={() => setCount(count - 1)}>Decrement</button>
        </center>

        </>
    )
}


// function Home () {
//     return (
//         <>
//         </>
//     ) 
// }

// export default Home;


// Types of componentes
// Functional and class components

// Class Components: 
    // used before 2018 
    // which are not easy to understand
    // complex logic
    // life cycle methods are used in class components
    // class components are works based on some keywords: this, constructor, super are used
    // class components are stateful components

// Functional Componets:
    // Used after 2018
    // Easy to understand, no complexity
    // React hooks are used in functional components
    // there are no keywords
    // functional components are stateless (without hooks) and stateful (with hooks)


// useState: this is one of the react component used to store and update the value

// let [state, useState] = useState(initial value)
// state = initial value
// setState is the function to update the state