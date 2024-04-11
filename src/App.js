import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import React, {useState} from "react";
import Stars from './components/Stars';


// used array here to hold movies instead of using movie component
const App = () => {
  const [movies] = useState([
    { id: 1,
      img:"https://lumiere-a.akamaihd.net/v1/images/badtimeselroyale_feature-poster_584x800_a7f10c8c.jpeg?region=0%2C0%2C584%2C800",
      title:"Bad Times At The El Royale",
      year: 2018,
      info:"1969. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a single desk clerk. Some of the new guests' reasons for being there are less than innocent and some are not who they appear to be.",
    },
  
    { id: 2,
      img:"https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
      title:"Inglorious Bastards",
      year:2009,
      info:"In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    },

    { id: 3,
      img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
      title:"Citizen Kane",
      year:1941,
      info:"Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
    },

    { id: 4,
      img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      title:"The Godfather",
      year:1972,
      info:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },

    { id: 5,
      img:"https://m.media-amazon.com/images/I/51H1q0Vd8RL._AC_UF894,1000_QL80_.jpg",
      title:"Gone With The Wind",
      year:1939,
      info:"A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.",
    },

    { id: 6,
      img:"https://musicart.xboxlive.com/7/bac65000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      title:"Shutter Island",
      year:2010,
      info:"Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
  ]);
  
  return (
      <div className='App'>
        <NavBar />
        <div className='container-fluid movie-app mt-5'>
          <div className='row'>
            <MovieList movies = {movies} starsComponent = {Stars} />
          </div>
          {/* <ReviewList /> */}
        </div>
      </div>
  );
}

export default App;