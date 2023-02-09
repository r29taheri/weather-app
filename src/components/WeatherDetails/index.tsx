import { useMemo } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

import { degreeConvertor } from "../../utils/degreeConvertor";
import { getRandomColor } from "../../utils/randomColor";
import { handleReturnTime } from "../../utils/time";
import { Weather } from "../../models/Weather";

interface Props {
  city: string;
  data: Weather;
  isCelsius: boolean;
}
export const WeatherDetails = ({ city, isCelsius, data }: Props) => {
  const bgColor = useMemo(() => getRandomColor(), [city]);

  return (
    <div
      className="mt-3 min-w-sm max-w-sm border border-gray-100 bg-green-600 transition-shadow shadow-lg hover:shadow-shadow-xl w-full text-purple-50 rounded-md"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-md mb-2 px-4 pt-4">
        <div className="flex justify-between">
          <div className="relative">
            <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
              {city}
            </span>
          </div>
          <span className="text-lg font-bold ">{handleReturnTime()}</span>
        </div>
      </h2>

      <div className="flex items-center p-4">
        <div className="flex justify-center items-center w-96">
          <TiWeatherPartlySunny size={100} className="text-yellow-500" />
        </div>
      </div>
      <div className="text-md pt-4 pb-4 px-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <span className="flex space-x-2 items-center">
              <WiStrongWind size={30} />
              <span>{data.windSpeed}km/h</span>
            </span>
            <span className="flex space-x-2 items-center">
              <WiHumidity size={30} />
              <span>{data.humidity * 100}%</span>
            </span>
          </div>
          <div>
            <h1 className="text-6xl">
              {degreeConvertor(isCelsius, data.temperature)}°
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
