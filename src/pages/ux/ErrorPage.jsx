import { NavLink, useRouteError } from "react-router-dom"
import '../ui/Errorpage.css'
import err from '../../assets/err.png';
export const ErrorPage = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <section className="error-container">
                <div className="error-image-container">
                    <img src={err} alt="404" />
                </div>
                <div className="error-text-container">
                    <p>The page you are looking for could not be found</p>
                    <p>.....Back to previous page</p>
                </div>
                <div className="error-button-container">
                    <NavLink to="/" id="error" className="button-link">
                        Go back to Homepage
                    </NavLink>
                </div>
            </section>
        )
    }
}