import { useHistory } from "react-router";

const ProductCard = () => {
  const history = useHistory();

  const goProductDetail = () => {
    history.push(`/ProductPage`);
  };

  return (
    <>
      <div
        onClick={goProductDetail}
        className="w-60 sm:w-11/12 gap-4 mb-20 flex flex-col shadow hover:scale-110 hover:shadow-2xl"
      >
        <img
          className="object-fill cursor-pointer"
          src="/assets/product-cover.png"
        />
        <h5 className="sm:text-center">Graphic Design</h5>
        <a className="text-[#737373] sm:text-center">English Department</a>
        <div className="flex gap-2 justify-center">
          <h5 className="text-[#737373]">$16.48</h5>
          <h5 className="text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex items-center gap-1 justify-center pb-3">
          <div class="w-4 h-4 hover:scale-110 bg-blue-500 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-teal-700 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-orange-400 rounded-full"></div>
          <div class="w-4 h-4 hover:scale-110 bg-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;