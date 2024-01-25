const ProductCard = () => {
  return (
    <>
      <div className="w-60 gap-4 mb-20 flex flex-col shadow hover:scale-110 hover:shadow-2xl">
        <img
          className="object-fill cursor-pointer"
          src="https://s3-alpha-sig.figma.com/img/2305/7910/d190d178c2a7b276e896b9d38b982bf6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSIMrtdK7v4wGCBqFNHRcNf0h9XaPoG11fDQaB9Easb6LuLA9MZnuFCbm~PeKXizjvjmVvAR-OwpsJ-s65Pus~htqqEN661Adng8GPeWdPS7S0MXYb5EgjvpQ8YV5~jJ1Iw24yCmp~h5f5TgLnyf3hd-tncuC~rNHNfWvKGfphoh1HTYrPcqDVqFTMcSpezkkXJGIxP3iY6B3Onvx-qnUGrzQ0pi17DTsdaJ4MPd-mjkpDi1P8T5pte5BvOaMdItMivuYkmti1nEMgSC1oGGmiWaRDWXlYdZyfz694RG9bf7qg45tiY~4jXIzkdBkHn4DC78ISt0wDRyG2W4-Y9gsA__"
        />
        <h5>Graphic Design</h5>
        <a className="text-[#737373]">English Department</a>
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
