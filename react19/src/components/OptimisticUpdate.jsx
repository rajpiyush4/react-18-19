import { useOptimistic } from "react";

function OptimisticUpdate() {
    const currentName = 'Rohit';
    const [optimisticName, setOptimisticName] = useOptimistic(currentName);

    const updateName = async (name) => {
        // return new Promise((res, rej) => {
        //     rej(name)
        // })
        return new Promise((res, rej) => {
            setTimeout(() => {
                // if (name === "") {
                //     rej("Name cannot be empty");
                // } else {
                    res(name);
                // }
            }, 2000);
        });
    }

    const submitAction = async formData => {
        try {
            const newName = formData.get("name");
            setOptimisticName(newName);
            await updateName(newName);
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form action={submitAction}>
            <p>Your name is: {optimisticName}</p>
            <p>
                <label>Change Name:</label>
                <input
                    type="text"
                    name="name"
                    disabled={currentName !== optimisticName}
                />
            </p>
        </form>
    );
}

export default OptimisticUpdate;
