import React, { useMemo, useState } from "react"
import Parent from "./Parent";
import Child from "./Child";


const ParentMemo = React.memo(Parent);
const ChildMemo = React.memo(Child);
function Example() {
    const [state, setState] = useState(0);
    // console.log(ChildMemo, 'ChildMemo')
    // const ChildMemo2 = React.memo(ChildMemo); // no use because it will memoize on every rerender of example component so basically not memoizing //Doubt1 
    const ChildPropMemo = useMemo(() => <Child/>, []);   // Doubt2 
    // const ChildPropMemo = useMemo(() => <ChildMemo/>, []);   // Doubt3
    // const ChildPropMemo = useMemo(() => Child, []); // why both rerendering? // Doubt4
    // const ChildPropMemo = useMemo(() => <Child/>, []); // why none of them rerendering? //Doubt5
    // console.log(ChildPropMemo, 'ChildPropMemo')

    return (
        <div>
            Example-1
            <button onClick={() => setState(state + 1)}>Click</button>
            <ParentMemo>
               {/* {'adsdf'} */}
                <ChildMemo/>

                {/* {ChildPropMemo } */}
                {/* <ChildMemo />  */}
                {/* {ChildPropMemo} */}
                {/* {<ChildPropMemo/>} */}
                {/* {ChildPropMemo} */}
            </ParentMemo>
            {state}
        </div>
    )
}

export default Example;








// Ex - pass a primitive value as a prop


// Ans(Doubt2):
// Case 1. if useMemo has no memoized child function:  ( memoize Child function): Both rerender
// Here the Function is memoizing and not it's value (Element). so whenever state updates <ChildPropMemo/> (object) will be recreated and so child component will get rerendered and so parentMemo will get new ChildPropMemo obj and so parentMemo will get rerendered.

// Case 2. if useMemo has no memoized child component: (memoize <Child/> element)
// None of them rerender. Because Now memoized Parent has memoized child prop. And Child is passed as a prop (children) so it will not get rerendered. Because props not change parentmemo is rerendered and Child Element is not recreating.

// Case 3. if useMemo has memoized child Function: both rerender because new child element created on every state update. 


// Case 4. if useMemo has memoized child Element: none of them rerender. ( and why one should use this case method instead of 2nd one? Ans: (ChildMemo is a React.memo-wrapped version of the Child component, React.memo is basically a higher order function), And?--------------------?????????) : // this could be the answer: In practice, you can make a lot of memoization unnecessary by following a few principles:

// When a component visually wraps other components, let it accept JSX as children. This way, when the wrapper component updates its own state, React knows that its children don’t need to re-render.. Case 4 can basically count as an unnecessary memoization is case 2 can work.





// . Keep in mind that memo is completely useless if the props passed to your component are always different, such as if you pass an object or a plain function defined during rendering. This is why you will often need useMemo and useCallback together with memo.
// Also, not all memoization is effective: a single value that’s “always new” is enough to break memoization for an entire component.