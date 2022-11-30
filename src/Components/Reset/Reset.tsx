import React, {FC} from "react";

interface Props {
    reset: () => void;
}

const Reset: FC<Props> = ({reset}) => {
    return (
        <div className="reset">
            <button className="reset__btn"
                    onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default Reset;