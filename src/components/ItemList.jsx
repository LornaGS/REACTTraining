
import ItemCard from './ItemCard'
import itemdata from '../data/itemsData.json'

export default function ItemList(){



return(
<div className="items-grid">
        {itemdata.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            symbol={item.symbol}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

)
}