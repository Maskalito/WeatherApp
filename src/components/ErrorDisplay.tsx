interface ErrorDisplayProps {
    errorMessage: string;
}

const ErrorDisplay = ({ errorMessage }: ErrorDisplayProps) => {
    return (
        <div className="invalid_location">
            {errorMessage}
        </div>
    );
};

export default ErrorDisplay;
