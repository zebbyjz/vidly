import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import CustomDropDown from "./customDropDown";
import FilterComponent from "./filterComponent";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };

  handlePageReset=()=>{
    this.setState({currentPage:1});
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCustomDropDown = (numItemsToDisplay) => {
    this.setState({ pageSize: numItemsToDisplay });
  };

  render() {
    const { pageSize, currentPage } = this.state;

    const { length: count } = this.state.movies;

    const moviesCopy = paginate(this.state.movies, currentPage, pageSize);

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mt-5">
              <FilterComponent></FilterComponent>
            </div>
            <div className="col">
              <CustomDropDown
                onDropChange={this.handleCustomDropDown}
                onPageReset={this.handlePageReset}
              ></CustomDropDown>

              <p>
                Showing {moviesCopy.length} of {count} movies in the database.
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {moviesCopy.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={movie.liked}
                          onClick={() => this.handleLike(movie)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              ></Pagination>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
