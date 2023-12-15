import model from "./model.js";

export const findAllLoves = () => model.find();
export const createUserLovesMovie = (userId, movieId) =>
  model.create({ user: userId, movieId: movieId });
export const deleteUserLovesMovie = (userId, movieId) =>
  model.deleteOne({ user: userId, movieId: movieId });
export const findUsersThatLoveMovie = (movieId) =>
  model.find({ movieId: movieId }).populate("user");
export const findMoviesThatUserLoves = (userId) => model.find({ user: userId });
