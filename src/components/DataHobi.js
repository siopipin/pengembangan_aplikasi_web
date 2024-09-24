import ListHobi from "./ListHobi";

function DataHobi({dataArr}) {
  return (
    <div>
      <ul>
        {dataArr.map((itemHobi) => (
          <ListHobi title ={itemHobi} />
        ))}
      </ul>


    </div>
  );
}

export default DataHobi;
