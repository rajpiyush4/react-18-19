import { useState } from "react";

const data = { data: 'some data' };
function Parent({ children }) {
    console.log('Parent');
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Click {counter}</button>
            {children(data)}
            Parent
        </div>
    )
}

export default Parent;


















// Will child component rerender when i press the button
// const childrenMemo = useMemo(() => children(data), [data, children]);