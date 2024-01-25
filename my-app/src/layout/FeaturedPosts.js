import ContentCard from "../components/ContentCard";

const FeaturedPosts = () => {
  const tempArr = [
    "https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJ41IjtG2GhzkbtGpaTacoQtjbKaOd91FPxS6Ac0scGWM4qQ9wMkFIl1dyAq2GGrebY7nb4zxJX-vkJ~n0sxCyPM6QBfXTnXT~n1PSVUBTNv2VrsqDP8CytYfcbZONOqLcA2jG-XYI3MI36hFSMCRs1pfEbAWcK9QMwn7NV9NcdnoAlxmDMR26mEY7WUrY-5GzixyjAPNSsdF0WwczxxXmclgHD--xv~6K6ATauIKMu-NtH1iIZkQMXretkZMLNQ~QIgbpV-A7ddIA9qsdwARDl~1c2B7HmUoekDk9b5ZdZpW9KfQ9wEm1iV-FHguJ~8rOiPAZVYxr53ITBlYtgMJw__",
    "https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlBUlsFlJrjXEj-0YqV~snc1aEKTbWjqXnQUiXTa~6TD2xiFiZdJ6kUa-OJfRIsC9KF5es4dS361-hc8XG5FBaW2iNgaCT8glqt8TcDOBeQ2S-AMZIkO~zk3~WKpJhP7IlmY8YohslGG1GrlbTnn8czn~FeRHEcktt~r44usrTiCAVe3VUp-zNAk8yKY3YU3XbEi-pVgSqwswwjnkZwLrso8FvnCIDRwsQJrOnF~s-LrIRfPh3QnA7dsd7V82mlbpT-7YvQ8I7jdcczkZs5KpjkNvucBCuPu1zqk7oF3-NdI2qyZAkZ-vBzkuaJ5ZsGdjsE4XnWaI9nXtRTdsLJhVA__",
    "https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aob-AwajBWR8lcCFBDA3NygrWKknnpQa6cakJt9dNnORJMcPszCDjLn-EwZx5CgG~za7QT8wYoD7p3cBXj0zI5c8VQZhXP0g04zomd0hMGRHIOdetNXF1SR1XDFHDEhHsEM8UnQNakk3b2NmEvI3IEW1Qg3kX1M1RTvja1KaCUuTJBQGs6OPPscTHrH512UG6PiETUxX1Qn~3UE-llwMzoVyRlmIEh2Q3BFCY4V3kr2c1g9VWrDq-1YhB1NVSOg1RSukSa8~5pI1KgHeSOjNErBtcf3raDutwyzcUW172OCqhQZTTQGyBpjCVcD5c9gVDJwo8ubMEOUuzOa3jWM3wg__",
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
