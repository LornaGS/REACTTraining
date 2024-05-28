// Quick Lab 5 - Rendering External Data from json file
import '../css/item.css';

function ItemCard({ symbol, name, unicodeVal }) {
    return (
      <div className="item-card">
        <div className="symbol">{symbol}</div>
            <h1>{name}</h1>
            <h3>{unicodeVal}</h3>
        
          </div>
       
    );
  }
   
  export default ItemCard;