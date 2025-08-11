import '../ui/Loading.css'
export const Loading = () => {
    return (
        <section className="loading-section">
            <div className="paw-print-loader ">
                <div className="paw">
                    <div className="pad large"></div>
                    <div className="pad small one"></div>
                    <div className="pad small two"></div>
                    <div className="pad small three"></div>
                    <div className="pad small four"></div>
                </div>
                <h1 id='load'>Loading...</h1>
            </div>
        </section>
    )
}