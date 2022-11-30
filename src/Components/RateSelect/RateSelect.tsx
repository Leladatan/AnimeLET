import React, {FC} from "react";

interface Props {
    rate: string;
    setRate: React.Dispatch<React.SetStateAction<string>>;
}

const Reset: FC<Props> = ({rate, setRate}) => {
    return (
        <div className="select_rate-star">
            <select
                name="anime"
                id="anime-select"
                value={rate}
                onChange={(e) => {
                    setRate(e.target.value);
                }}>
                <option value="">Rate-star</option>
                <option value="up">Ascending order</option>
                <option value="down">Descending order</option>
            </select>
        </div>
    );
};

export default Reset;