import Link from "next/link";
export const Card = ({ cart, onChangeQuantity }) => {
  const {
    name,
    image,
    id,
    isStocked,
    productNumber,
    oldPrice,
    price,
    quantity,
  } = cart;
  return (
    <>
      <div className="ctable-row border-bottom">
        <div className="cart-width-main">
          <div className="imgBorderAddCart">
            <Link href={`src/data/product/product${id}`}>
              <a className="cart-table__img">
                <img src={image} className="js-img img-fluid mx-auto" alt="" />
              </a>
            </Link>
            </div>
            <div className="ctable-info">
              <Link href={`/product/${id}`}>
                <a className="title">{name}</a>
              </Link>
              {isStocked && <span className="ctableinfo-stock">in stock</span>}
              <span className="ctableinfo-num">SKU: {productNumber}</span>
            </div>
          
        </div>
        <div className="cart-sub-width">
          <div className="ctable-col">
            {oldPrice ? (
              <span className="ctable-price">
                ${price}
                <del className="text-muted">{oldPrice}</del>
              </span>
            ) : (
              <span className="ctable-price">${price}</span>
            )}
          </div>
          <div className="ctable-col">
            <div className="mainCount">
              <div className="count">
                <span
                  onClick={() => onChangeQuantity("decrement", quantity)}
                  className=" clink-prev counter" 
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </span>
                <input type="text" className="c-input countInput" value={quantity} />
                <span
                  onClick={() => onChangeQuantity("increment", quantity)}
                  className=" clink-next counter"
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="ctable-col">
            <span className="ctable-total">
              ${(price * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
