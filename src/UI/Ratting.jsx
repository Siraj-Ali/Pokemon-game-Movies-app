export const Ratting = ({rate}) => {
    // Convert rating out of 10 to a scale of 5
    const rating = (rate / 10) * 5;
    // console.log(rate/5);
    // Calculate full stars, half stars, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfstar = rating % 1 >= 0.5
    const emptyStars = 5- Math.ceil(rating);
    const stars = [];
    //Add full star 
    for(let i=0; i < fullStars; i ++) {
        stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
    }
    //Add Half Star
    if(hasHalfstar) {
        stars.push(<i key={`half`} className="bi bi-star-half text-warning"></i>);
    }
    // Add empty star 
    if(emptyStars) {
        for(let j=0; j < emptyStars; j++) {
            stars.push(<i key={`empty-${j}`} className="bi bi-star text-warning"></i>);
        }
    }
    return (
        <>
              {stars}
              <span className="ms-2"> {rating}/5</span>
        </>
    )
}