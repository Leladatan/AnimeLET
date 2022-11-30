import React, {FC} from "react";

interface Props {
    minYear: number;
    maxYear: number;
    setMinYear: React.Dispatch<React.SetStateAction<number>>;
    setMaxYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearSelect: FC<Props> = ({minYear, maxYear, setMinYear, setMaxYear}) => {

    setTimeout(() => {
        minYear > maxYear ? setMinYear(prev => prev - 1) : null
    }, 1);

    return (
        <div className="select_year__inputs">
            <div className="min">
                <label className="select_year__inputs__text" htmlFor="minYear">{minYear}</label>
                <input disabled={minYear > maxYear} className="min-input" type="range"
                       id="minYear" name="minYear"
                       min="1960" max="2022" step="1"
                       value={minYear}
                       onChange={(e) => {
                           setMinYear(Number(e.target.value))
                       }}
                />
            </div>

            <div className="max">
                <label className="select_year__inputs__text" htmlFor="maxYear">{maxYear}</label>
                <input className="max-input" type="range" id="maxYear" name="maxYear"
                       min="1960" max="2022" step="1"
                       value={maxYear}
                       onChange={(e) => {
                           setMaxYear(Number(e.target.value))
                       }}
                />
            </div>
        </div>
    );
};

export default YearSelect;