import { useTransition } from "react";
import { useState } from "react";


function Action() {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState(null);

    const updateName = async (name) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (name === "") {
                    rej("Name cannot be empty");
                } else {
                    res(name);
                }
            }, 2000);
        })
    };

    const handleSubmit = () => {
        startTransition(async () => {
            try {
                const data = await updateName(name);
                if (data) {
                    setData(data);
                    return;
                }
            } catch (error) {
                setError(error);
            }
        })
    };

    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>
                Update
            </button>
            {data && <p>{data}</p>}
            {/* {error && <p>{error}</p>} */}
        </div>
    );
}

export default Action;