import { useActionState } from "react";

function ActionState() {
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
    }
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            console.log(previousState, 'previousData')
            try {
                const data = await updateName(formData.get("name"));
                if (data) {
                  return data;
                }
                return null;
            } catch (error) {
                return error;
            }
      },
      null,
    );
  
    return (
      <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p>{error}</p>}
      </form>
    );
}
  
export default ActionState;
  