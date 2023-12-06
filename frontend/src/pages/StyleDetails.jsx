import { useState } from "react";
import amberAle from "../assets/images/amber-ale.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// placeholder por ahora
export const StyleDetails = () => {
  const [favorite, setFavorite] = useState(false);

  // hacer esto prop cuando tenga la info

  const totalSrm = 40;
  const totalIbu = 100;
  const totalAbv = 15;

  function calculatePercentage(value, totalType) {
    return (value / totalType) * 100;
  }

  // TODO: agregar tooltips

  return (
    <div className="container font-poppings">
      <main className="flex mt-16">
        <div>
          <img src={amberAle} className="rounded-xl"></img>
        </div>
        <div className="ml-auto max-w-xl">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold mr-4">American Amber Ale</h1>
            {favorite === false ? (
              <FavoriteBorderIcon
                className="scale-150 text-red-900"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
            ) : (
              <FavoriteIcon
                className="scale-150 text-red-900"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
            )}
          </div>

          <p className="font-normal mt-6">
            An amber, hoppy, moderate-strength American craft beer with a malty caramel flavor. The
            balance can vary quite a bit, with some versions being fairly malty and others being
            aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the
            caramel malt profile.
          </p>
          <div className="flex mt-12 text-[18px]">
            <h6 className="text-[#DB8116] font-bold mr-1">CATEGORY:</h6>{" "}
            <h6 className="font-semibold">AMBER AND BROWN AMERICAN BEER</h6>
          </div>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">PALE</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#ffe699] via-[#962d00] to-[#36080a] rounded-xl relative">
              {" "}
              <span
                style={{
                  left: `${calculatePercentage(11, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(18, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">DARK</p>
          </div>
          <p className="font-bold text-[#DB8116] mx-auto w-fit">11-18 SRM (COLOR)</p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#000000] to-[#909922] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(25, totalIbu)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(45, totalIbu)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#B3B554] mx-auto w-fit">25-45 IBU (BITTERNESS)</p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#e7e4c1] to-[#d1bf51] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(4.4, totalAbv)}%`,
                }}
                className="absolute h-full  dark:text-white text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(6.1, totalAbv)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#DED490] mx-auto w-fit">4.4-6.1% ABV(ALCOHOL)</p>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-12">
            ORIGINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              1.045-1.060% OG(ORIGINAL GRAVITY)
            </span>
          </h6>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-4">
            FINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              1.010-1.015% FG(FINAL GRAVITY)
            </span>
          </h6>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">APPEAREANCE</h1>
            <p className="font-normal">
              Deep amber to coppery-brown in color, sometimes with a reddish hue. Moderately large
              off-white head with good retention. Generally quite clear.
            </p>
          </div>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">AROMA</h1>
            <p className="font-normal">
              Low to moderate hop aroma reflective of American or New World hop varieties (citrus,
              floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon). A citrusy
              hop character is common, but not required. Moderately-low to moderately-high
              maltiness, usually with a moderate caramel character, that can either support,
              balance, or sometimes mask the hop presentation. Esters vary from moderate to none.
            </p>
          </div>
          <div className="mb-8">
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">FLAVOR</h1>
            <p className="font-normal">
              Moderate to high hop flavor with similar characteristics as the aroma. Malt flavors
              are moderate to strong, and usually show an initial malty sweetness followed by a
              moderate caramel flavor and sometimes toasty or biscuity malt flavors in lesser
              amounts. Dark or roasted malt flavors absent. Moderate to moderately-high bitterness.
              Balance can vary from somewhat malty to somewhat bitter. Fruity esters can be moderate
              to none. Caramel sweetness, hop flavor, and bitterness can linger somewhat into the
              medium to full yet dry finish.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
