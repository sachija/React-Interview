import React from 'react'

function Theory() {
  return (
    <div>
        <h1>This is implementation of clean-up useEffect</h1>
        <h1> Theory que</h1>
        <h2>Why do we need key in react ?</h2>
        <p> Ans-A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. <br /> In other words, we can say that keys are used to give an identity to the elements in the lists. The next thing that comes to mind is that what should be good to be chosen as key for the items in lists. <br/> It is recommended to use a string as a key that uniquely identifies the items in the list</p>
        <hr />
        <p> <h2>what is Redux</h2></p>
    <p>Ans-it is third party library. it is container that stores the state of application.also called as state management redux architecture 
    It is four block level elememts <br /> a.Action-collect data from component or API call <br /> b.Reducer-Get data from action and send to store <br /> c.store -state of complete application, single store for one application <br /> d.view-it is user interface like button,toggle,radio button etc <br /> </p>
    <hr />
    <h2>What is use of Usecallback and UseMemo</h2>
     <p> A.useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed. <br />
         B.useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.</p>
<hr />
<h2>What is Higher order component in React</h2>
<p>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component. <br />

 Syntax: <br />

const EnhancedComponent = higherOrderComponent(OriginalComponent);
Reason to use Higher-Order component: <br />

Easy to handle <br />
Get rid of copying the same logic in every component <br />
Makes code more readable</p>
    </div> 

  )
}

export default Theory