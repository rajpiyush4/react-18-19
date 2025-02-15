import { memo, useMemo } from "react";
import VeryHeavyComponent from "./VeryHeavyComponent"
import { useState } from "react";

const VeryHeavyComponentMemo = memo(VeryHeavyComponent);
const ComponentInTheMiddle = (props) => <VeryHeavyComponentMemo {...props} />

function Example() {
    const [state, setState] = useState(0);
    return (
        <div>
            <button onClick={() => setState(state + 1)}>click {state}</button>
            <ComponentInTheMiddle>
                Rerender : {state}
            </ComponentInTheMiddle>
        </div>
    )
}

export default Example;









// I think it re-renders again. Because children of ComponentInTheMiddle are not memoized. So even if the text is the same, it will be created on each state changes(renders).

// It will re-render, correct!  But why? Text is a primitive value, isn't it? When React compares children props on memoized component, it should detect that it's the same and stop re-rendering?

//Text is a primitive value but not the children itself. children is an array of ['Re-renders example: ', 'Clicked'] and this array is created on each render.












// Fix

const VeryHeavyComponentMemoFix = memo(VeryHeavyComponent);
const ComponentInTheMiddleFix = (props) => {
   const propsMemo = useMemo(() => props, []);
    return <VeryHeavyComponentMemoFix {...propsMemo} />
}

function FixExample() {
    const [state, setState] = useState(0);

    return (
        <div>
            <button onClick={() => setState(state + 1)}>click {state}</button>
            <ComponentInTheMiddleFix>
                Rerender : {state}
            </ComponentInTheMiddleFix>
        </div>
    )
}

// export default FixExample;

