import React from "react";
import FilmsList from "../components/FilmsList/FilmsList";
import MainTemplate from "../templates/MainTemplate";
import BoxTemplate from "../templates/BoxTemplate";
const Films = () => {
  return (
    <MainTemplate>
      <div>Films</div>
      <BoxTemplate>
        <FilmsList />
      </BoxTemplate>
    </MainTemplate>
  );
};

export default Films;
