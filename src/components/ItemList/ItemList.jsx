import Item from '../Item/Item';

function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-3">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;