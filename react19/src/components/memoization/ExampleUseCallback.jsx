import { memo, useCallback, useEffect, useMemo, useState } from "react"


const ChildMemo = memo(Child);
function ExampleUseCallback() {
  const [state, setState] = useState(0);

  function someFunction() {
    console.log('someFunction', state);
  }

  // const ref = useCallback((node) => {
  //   console.log(node);
  // })

  const someFunctionMemo = useCallback(someFunction, []);
  // const ChildMemo = useMemo(() => <Child someFunction={someFunctionMemo} />, []);

  
  // useEffect(() => {
  //  someFunctionMemo()
  // }, [someFunctionMemo]);

  return (
    <div>
      <p>useCallback example:</p>
      <button onClick={() => setState(state + 1)}>Click {state}</button>
      <div>
        <ChildMemo someFunction={someFunctionMemo} />
      </div>
    </div>
  )
}

export default ExampleUseCallback;


function Child({  }) {
  console.log('Child', );

  return <>child</>
}
