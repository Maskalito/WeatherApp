import React from "react";

interface ErrorDisplayProps {
    errorMessage: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorMessage }) => {
    return (
        <div className="invalid_location">
            {errorMessage}
        </div>
    );
};

export default ErrorDisplay;