import { memo, useMemo } from "react"
import Parent from "./Parent"
import Child from "./Child";

const ParentMemo = memo(Parent);
function Example() {

    const ChildMemo = useMemo(() => ((data) => <Child data={data} />), []);

    return (
        <div>
            Example-3
            <ParentMemo>
                {ChildMemo}
            </ParentMemo>
        </div>
    )
}

export default Example;
