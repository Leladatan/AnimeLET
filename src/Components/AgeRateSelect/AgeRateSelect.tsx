import React, {FC} from "react";

interface Props {
    ageRate: string;
    setAgeRate: React.Dispatch<React.SetStateAction<string>>;
}

const AgeRateSelect: FC<Props> = ({ageRate, setAgeRate}) => {
    return (
        <div className="select_age">
            <select
                name="anime"
                id="anime-select"
                value={ageRate}
                onChange={(event) => {
                    setAgeRate(event.target.value);
                }}>
                <option value="">Age-rate</option>
                <option value="0+">0+</option>
                <option value="14+">14+</option>
                <option value="16+">16+</option>
                <option value="18+">18+</option>
            </select>
        </div>
    );
};

export default AgeRateSelect;