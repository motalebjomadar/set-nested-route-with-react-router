import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooops!!!</h2>
            <Link><button>Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;