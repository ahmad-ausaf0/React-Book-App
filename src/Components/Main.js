import react from "react";
const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book name"></input>
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/book.jpg" alt=" " />
        </div>
      </div>

      <div className = "container">

      </div>
    </>
  );
};
export default Main;
