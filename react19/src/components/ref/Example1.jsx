import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Example1() {;
  const ref = useRef([]);
  console.log(ref.current);

  const elems = [2, 4, 5, 6, 6];

  // useEffect(() => {
  //   console.log(ref.current);
  // }, []);


  return (
    <div>
      {/* <div ref={ref}>Hi</div> */}
      {elems.map((item, index) => <div ref={(item) => ref.current[index] = item} key={index}>{item}</div>)}

      <Counter/>
    </div>
  )
}

export default Example1;





function Counter() {

// // Inside of React
// function useRefExample(initialValue) {
//   const [ref, unused] = useState({ current: initialValue });
//   return ref;
// }
  const countRef = useRef(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log(countRef.current);
  }, [countRef.current]);

  const increment = () => (countRef.current += 1)
  return <>
    <button onClick={increment}>Increment</button>
    {/* <Child ref={ref}/> */}
  
    <ForwartMyInput ref={ref} />
  </>
}

Child.propTypes = {
  ref: PropTypes.ref,
};

function Child({ ref }) {
  console.log('child', ref.current);
  useEffect(() => {
    console.log(ref.current);
  }, [])
  return (
    <div>
      <button ref={ref}>child</button>
    </div>
  )
}


MyInput.propTypes = {
  label: PropTypes.string,
};


function MyInput(props, ref) {
  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
};

const ForwartMyInput = forwardRef(MyInput);


















// ques 1: Why am I getting a lint warning from the exhuastive-deps rule:
// React Hook React.useEffect has an unnecessary dependency: 'coutRef.current'.
// Either exclude it or remove the dependency array.

// Ans Yes, you generally should not include a ref directly in the dependency array of a useEffect hook because changes to a ref's current property do not trigger a re-render, meaning React won't know when to re-run the effect even if the ref value has been updated; it's considered bad practice to include it as a dependency as it can lead to unexpected behavior

// The fact that an update the a ref.current value doesn't trigger a re-render is an intentional feature. React doesn't keep track of the current value of a ref. You're responsible for referencing and mutating that value yourself. Because referencing DOM nodes is such a common use case, React will set the current value for you when you pass a ref prop to an element. But other than that, all React promises is that it will store your object and associate it to a particular instance of a component for as long as that component exists.

// Anything you use in your effect callback that won't trigger a re-render when updated should not go into the dependency array.




//useRef persists across renders but is not tied to the component's update cycle.
// Even though useRef persists across renders, React does not track changes to ref.current. Instead, React simply keeps a reference to the same object across renders


//function Video() {
//   const playerRef = useRef(null);
//   if (playerRef.current === null) {
//     playerRef.current = new VideoPlayer();
//   }
//   // ...
// Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.