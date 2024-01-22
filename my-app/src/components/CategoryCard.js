import React from "react";

const CategoryCard = () => {
  return (
    <div>
      <div className="max-w-9/12 flex flex-col items-center text-center py-[5rem]">
        <div className="mb-12">
          <h2 className="font-montserrat text-2xl mb-2.5">EDITOR’S PICK</h2>
          <p className="font-montserrat text-sm text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex gap-7 justify-between flex-wrap">
          <div className="relative w-[32rem] h-[32rem] hover:shadow-lg object-fill">
            <img
              className="w-full h-full object-fill"
              src="https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cqAd2C3sQ0R1OyR5krnkNz5kuf0hAy~-4DDdGM-cZHCY2LCD72Cib2qHaJFSfAioYF~rAGQl1ZiIO6wjR0UxNBMR0XSjFVbUg3LF-mKCJOrOeCFFTdEYs4na6XPHjuLfMqPRs~lqpdN78g9WSHRVxrmhiqwQ-fMMvo3d66tWZmhnxDJnDXj4HhD3Z0MENKhf9U327FFA2babg5nwApgFD13BXXlvFSTYCbmDRyiDQZ5~2LXw5pfpGeq1cskjkUZGg8QJ6pVhXi96vwD6My40YEO9kcE7KpRcgfCxBWZlLq9mjrvX4aUEGAqvLzJOqEd-fvv2-Zbr0yVfNC-i-P5jdg__"
            />
            <button className="absolute left-3 bottom-0 mb-4 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
              MEN
            </button>
          </div>
          <div className="max-w-[15rem] relative hover:shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HpJn0IJWrIPvPn5uj6e825tZ2iJFNQcFQ18vzZy8Y8XXBTbQSl1kax2XHemgADfZIO0235yPgujyj66myR-iLWdKCSW96wrLui-d7-0JWU9XLqeJMK~b2iaZWUEKb2come7gnkuvmDwcRObu~xmKtDrECWgpC0FlSWXx2VeGX1FW-JzyXrzl-AcVHhaHM-D--aWkizTHJHE6LWm48-MXH3ue1jTg9UEp8soHLWBgx3Efz-4dqElhQK3AVy90YkTcNqFb1d~xRC8HHpJk~x3XInhpEhu2LCz6j0UlQh-mObJjLZlq5ruwLiPkXNF40CHtDVl1lZZKQnB3dgUSEdxcxQ__"
            />
            <button className="absolute left-3 bottom-0 mb-4 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
              WOMEN
            </button>
          </div>

          <div className="flex flex-col gap-5 justify-between">
            <div className="relative hover:shadow-lg">
              <img
                className="max-w-[15rem] max-h-[15rem] object-cover"
                src="https://s3-alpha-sig.figma.com/img/5077/f785/cbfd4a6cf9efad13d9b5d66b1b7cbf4f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIv2uaWtC8SHspUMVtsXwhiuiwgC0Oq51qbnvYGw17Ejhyl5ovX2-874SdwDPDMxosENTPge5SVETcTIWddUP-x4cmJHHVeDa8hH1amty0YOm~QeFzMfp~jd~JHL38TI86r4QclpyAhFA3nFmXPCg55PlX1v-SSldXhKZwgJ47dRc~PZWGqC27OucC5~rwrWnM8GlfIbOaKoMIV807tggr2ZXA0ZSiIXvILK9iP~B764GHSVFHvBfGivXf5Op6R4kxk4q6i7~AmXzTendeqCRwwxm72nG8PUKsv3IAmKXgsb62nEqxBYv0qPa6D9XD8UcuzG6iroPNQE7xgZ9BqNlw__"
              />
              <button className="absolute left-3 bottom-0 mb-4 px-6 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
                ACCESSORIES
              </button>
            </div>
            <div className="relative hover:shadow-lg">
              <img
                className="max-w-[15rem] max-h-[15rem] object-cover"
                src="https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0U9lyByJleXGpOl1r-cS~~hpFXLS5~UsgkIqH7Z9o63L7GN8kNZ9yiOZ08NgJKBvi-aW9-xuEmhhdwnbUjP7OfrfpvixRrA8SurDrIju-7lWoZmfO9UHrsdgsAXwYQ1t3eEHt-6tZFSeXkXWnY5t1XiPUVQwDWUA4OaRSCuEd8nrw06mmvgsrGePdZg5ZEMRZb~j2-JnXP3dTYj189eW-AkFTb3nxsZ0njul0-8sK3KLEMh4wXGB0oWzRUrYnH5fQMUsCZnuGefOk86zY2znBWkZDdufD54EOPxIjuC3qDB1fsync~bT4nwAMCo9dDxyb1aS-OC2fDWm8ChRTHqow__"
              />
              <button className="absolute left-3 bottom-0 mb-4 px-6 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
