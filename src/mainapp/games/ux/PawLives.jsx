import '../ui/PawLives.css'
export const PawLives=({style})=>{
    return(
        <section className="paw-lives-section" style={style}>
            <div className="paw-lives-container">
                <div className="paw-lives">
                            <div className="pad-lives large-lives"></div>
                            <div className="pad-lives small-lives one-lives"></div>
                            <div className="pad-lives small-lives two-lives"></div>
                            <div className="pad-lives small-lives three-lives"></div>
                            <div className="pad-lives small-lives four-lives"></div>
                        </div>
            </div>
        </section>
    )
}