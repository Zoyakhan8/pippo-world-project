import '../ui/TestimonalsCard.css'
export  const TestimonalsCard=({profile,username,testimonals})=>{
    return(
            <div className="card-container">
                <div className="card-profile-image">
                    <img src={profile} alt="user-profile" />
                    </div>
                    <div className="card-profile-name">
                        <h4 className='card-text'>{username}</h4>
                    </div>
                    <div className="card-testimonals">
                        <p className='card-text'>{testimonals}</p>
                    </div>
            </div>
    );
};