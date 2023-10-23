const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/configuration';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2M2NTU0MzExZmQxZTlkOTFlMjM0OTk5ODlmMDAyOCIsInN1YiI6IjY1MzZiNjdkNDJkODM3MDBlYWM2ZTAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEyiv-IjoeCUW3P7gY3mWUp6YlywAbujZrEpG3RMaZ8'
  }
};