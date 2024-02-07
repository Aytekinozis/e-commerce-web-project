import ContentCard from "../components/ContentCard";

const FeaturedPosts = () => {
  const tempArr = [
    "/assets/home/road.png",
    "/assets/home/pinkcar.png",
    "/assets/home/umbrellas.png",
  ];
  return (
    <div className="flex flex-col font-montserrat items-center py-[7rem]">
      <div className="flex flex-col gap-4 items-center max-w-[43rem] text-center pb-12">
        <h6 className="text-sm text-[#23A6F0]">Practice Advice</h6>
        <h3 className="text-[2.5rem]">Featured Posts</h3>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {tempArr.map((item) => (
          <ContentCard item={item} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedPosts;
