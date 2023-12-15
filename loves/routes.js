import * as dao from "./dao.js";

function LovesRoutes(app) {
  const findAllLoves = async (req, res) => {
    const loves = await dao.findAllLoves();
    res.json(loves);
  };
  const createUserLovesMovie = async (req, res) => {
    const userId = req.params.userId;
    const movieId = req.params.movieId;
    const loves = await dao.createUserLovesMovie(userId, movieId);
    res.json(loves);
  };
  const deleteUserLovesMovie = async (req, res) => {
    const userId = req.params.userId;
    const movieId = req.params.movieId;
    const status = await dao.deleteUserLovesMovie(userId, movieId);
    res.json(status);
  };
  const findUsersThatLoveMovie = async (req, res) => {
    const movieId = req.params.movieId;

    const loves = await dao.findUsersThatLoveMovie(movieId);
    res.json(loves);
  };
  const findMoviesThatUserLoves = async (req, res) => {
    const userId = req.params.userId;
    const loves = await dao.findMoviesThatUserLoves(userId);
    res.json(loves);
  };
  app.get("/api/loves", findAllLoves);
  app.post("/api/users/:userId/loves/:movieId", createUserLovesMovie);
  app.delete("/api/users/:userId/loves/:movieId", deleteUserLovesMovie);
  app.get("/api/loves/:movieId/users", findUsersThatLoveMovie);
  app.get("/api/users/:userId/loves", findMoviesThatUserLoves);
}

export default LovesRoutes;
