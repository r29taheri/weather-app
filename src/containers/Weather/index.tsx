import { useEffect, useState } from "react";

import { setCurrentCity } from "../../store/reducers/currentCitySlice";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import type { RootState } from "../../store/configureStore";
import { CITIES_DATA } from "../../constants/CITIES_DATA";
import {
  AutoComplete,
  SwitchButton,
  WeatherDetails,
} from "../../components/index";

export const Weather = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isCelsius, setsCelsius] = useState(true);

  const currentCity = useAppSelector(
    (state: RootState) => state.reducer.currentCity
  );
  const dispatch = useAppDispatch();

  const handleUpdateCity = (city: string) => {
    setSelectedCity(city);
    dispatch(setCurrentCity({ name: city }));
  };

  useEffect(() => {
    setSelectedCity(currentCity.name);
  }, []);

  return (
    <div className="max-w-xs mx-auto my-6">
      <AutoComplete
        selectedItem={selectedCity}
        data={Object.keys(CITIES_DATA)}
        setSelectedItem={handleUpdateCity}
      />
      {selectedCity && (
        <>
          <WeatherDetails
            city={selectedCity}
            isCelsius={isCelsius}
            data={CITIES_DATA[selectedCity]}
          />
          <SwitchButton
            className="mt-3 w-full"
            onClick={() => setsCelsius((curr) => !curr)}
          >{`Convert to ${isCelsius ? "Fahrenheit" : "Celsius"}`}</SwitchButton>
        </>
      )}
    </div>
  );
};
