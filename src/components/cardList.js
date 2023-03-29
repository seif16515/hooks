
import FilmCard from "./card";

const CardList = ({ data, deleteProduct,search }) => {
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase()) || item.rating.toString().includes(search)
  }
  )
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {filteredData.map((item) => {
        return <div ><FilmCard key={item.id} item={item} 
          deleteProduct={deleteProduct}
        /></div>
      })}
    </div>
  );
};
export default CardList;