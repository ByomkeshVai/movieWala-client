import ShowAllData from "../../../../components/modal/ShowAllData";

type TShowAllData = {
  isShowAllModalOpen: boolean;
  selectedMovieId: string;
  setIsShowAllModalOpen: (value: boolean) => void;
};

const ShowSingleMovie = ({
  selectedMovieId,
  isShowAllModalOpen,
  setIsShowAllModalOpen,
}: TShowAllData) => {
  return (
    <div>
      {selectedMovieId && (
        <ShowAllData
          selectedMovieId={selectedMovieId}
          isShowAllModalOpen={isShowAllModalOpen}
          setIsShowAllModalOpen={setIsShowAllModalOpen}
        />
      )}
    </div>
  );
};

export default ShowSingleMovie;
