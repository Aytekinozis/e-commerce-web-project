import { Button } from "@material-tailwind/react";

const HomeComp = () => {
  return (
    <div className="flex font-montserrat">
      <div>
        <img
          className="max-w-[60rem]"
          src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sd8H9sMPs-0u5YtFImOb79Aer44V-mAr4MuXO3rGaIlnsEMxghKC0Aw8FARYju6sVl458rnbbLscu91llbhVBAElNxTl5IE3OH6BWaRH7ol~AYYezoSnm1m-Lk8RTBDiXTnmIAo3tshP1H8G1~Gi4u~KMfyFHb7B3185wkUIpq0QHQ14fw4jDXia12OeOYgY2mkLCwD5xFjUcKH0IbH8jIyWLJ4nQD6mBDHdA1DY1EejV6mRtussEz9koDiU09biEmIyS6-z06v-1NYpT7-QLnYJvemHcY0nkFMjovX9Thy2DtVJAOxnWFAZ6tUollUPYhwv03f~EnTSoyOIYiYU1g__"
        />
      </div>
      <div className="flex flex-col gap-6 justify-center max-w-[25rem]">
        <h5 className="text-[#BDBDBD]">SUMMER 2020</h5>
        <h1 className="text-[2.5rem]">Part of the Neural Universe</h1>
        <h4 className="text-[#737373] text-xl">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex gap-4">
          <Button size="lg" color="green">
            BUY NOW
          </Button>
          <Button color="green" variant="outlined" size="lg">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
