# Compulsory Task

Follow these steps:

- Create Director schema (name, gender) and directorModel.
- Create Movie schema (name, year, directorID which type is mongoose.Schema.ObjectId) and movieModel.
- Write an API to post two directors to your database.
- Write an endpoint to post four movies to your databse. Don't forget to add directorId using the id in the compass db.
- Write and endpoint to GET a movie by id.
- Write and endpoint to GET all movies related to a certain director (by directorId). Don't forget to populate directorID in order to fetch the director data.
- Write an API to delete all movies related to a certain director(by directorId)
- Fetch all movies that are released after year a certain year(assuming year is a param).
- Edit the movie schema to contain comments array.
- Write an Endpoint to add some comments to a certain movie.
