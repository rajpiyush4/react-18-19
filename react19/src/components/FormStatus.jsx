//In design systems, it’s common to write design components that need access to information about the <form> they’re in, without drilling props down to the component. This can be done via Context, but to make the common case easier, we’ve added a new hook useFormStatus:


import { useFormStatus } from 'react-dom';

function DesignButton() {
  const {pending} = useFormStatus();
  return <button type="submit" disabled={pending} />
}