import { useCallback, useMemo, useState } from "react";


const wrapperFunction = (cb) => {
    for (let i = 0; i < 1000000000; i++);
    return cb;
};

const SomeComponent = (props) => {
    return null;
}


const cb = () => ([1, 2, 3]);
function Example() {
    const [state, setState] = useState(0);
    const data = useMemo(wrapperFunction(cb), [wrapperFunction]);

    console.log(data, 'data')
    const onSubmit = useCallback(wrapperFunction(() => {
        // do something here
    }), [wrapperFunction]);

    return (
        <div>
            <h1>useMemo vs useCallback example</h1>
            Click the button to re-render
            <button onClick={() => setState(state + 1)}>click me {state}</button>
            <SomeComponent data={data} onSubmit={onSubmit} />
        </div>
    )
}

export default Example;

















// The app on the screen is slow on re-render because of the wrapperFunction
// Which of the hooks do I need to refactor to fix it - useMemo or useCallback? And why? 