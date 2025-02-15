
function Parent({ children }) {
    console.log("Parent");
  return (
      <div> 
          Parent
          {children}
    </div>
  )
}

export default Parent;