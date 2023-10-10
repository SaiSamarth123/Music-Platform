import React from 'react'
import Header from "./Header";

const Home = () => {
 return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      {/* <SearchBar />

      {searchTerm.length > 0 && (
        <p className="my-4 text-base text-textColor">
          Searched for :
          <span className="text-xl text-cartBg font-semibold">
            {searchTerm}
          </span>
        </p>
      )} */}

      {/* <Filter setFilteredSongs={setFilteredSongs} /> */}

      {/* <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
        <HomeSongContainer musics={filteredSongs ? filteredSongs : allSongs} />
      </div> */}
    </div>
  );
};

export default Home