const CardMovie = () => {
    // style="width: 18rem;"
  return (
    <div className="card" style={{width:"18rem"}}>
      <img
        src={"https://pics.filmaffinity.com/atlantis_the_lost_empire-149874847-large.jpg"}
        className="card-img-top"
        alt="imagen-1"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardMovie;
