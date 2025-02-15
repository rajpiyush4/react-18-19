
function VeryHeavyComponent({child1, child2}) {
  for (let i = 0; i < 1000000000; i++);
  console.log('VeryHeavyComponent', child1, child2);
  return (
    <div>
      <div>{child1}</div>
      <div>{child2}</div>
      {/* VeryHeavyComponent,
      {Array.isArray(children) ? children.map((item, index) => <div key={index}>{item}</div>) : <div>{children}</div>} */}
    </div>
  );
}

export default VeryHeavyComponent