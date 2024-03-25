const CartProductSm = ({ shoppingCart }) => {
  return (
    <>
      <div className="flex gap-4">
        <img className="w-20 rounded-md" src="/assets/product-cover.png"></img>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold">{shoppingCart[0].product.name}</h5>
          <p> Count: {shoppingCart[0].count}</p>
          <p>
            Price:{" "}
            <span className="text-[#23856D]">
              ${shoppingCart[0].product.price}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartProductSm;
