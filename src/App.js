function App() {
  const myMap = new Map()
  myMap.set('1', 'value1')
  myMap.set('2', 'value2')

  const arr = [1, 2, 3, 4, 5]
  arr.map((item,i) => {console.log(`index ke-${i}: ${item}`);})

  console.log(myMap);
  console.log(myMap.get('1'));

  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
