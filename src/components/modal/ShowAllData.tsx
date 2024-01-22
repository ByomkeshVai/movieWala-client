/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useSingleMovieQuery } from "../../redux/api/movieAPI/movieAPI";

type TShowAllData = {
  isShowAllModalOpen: boolean;
  selectedMovieId: string;
  setIsShowAllModalOpen: (value: boolean) => void;
};

const ShowAllData = ({
  isShowAllModalOpen,
  setIsShowAllModalOpen,
  selectedMovieId,
}: TShowAllData) => {
  const { data }: any = useSingleMovieQuery(selectedMovieId);

  const handleOk = () => {
    setIsShowAllModalOpen(false);
  };

  const handleCancel = () => {
    setIsShowAllModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isShowAllModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <h2>
            Title : <span>{data?.title}</span>
          </h2>
          <h2>
            Description : <span>{data?.description}</span>
          </h2>
          <h2>
            Category : <span>{data?.category}</span>
          </h2>
          <h2>
            Quality : <span>{data?.quality}</span>
          </h2>
          <h2>
            Language : <span>{data?.language.join(", ")}</span>
          </h2>
          <h2>
            Genre : <span>{data?.genre.join(", ")}</span>
          </h2>
          <h2>
            Stars : <span>{data?.stars.join(", ")}</span>
          </h2>
          <h2>
            Tags: <span>{data?.tags?.join(", ")}</span>
          </h2>
          <h2>
            Movie Link :
            <span>
              <a href={data?.movieLink.join(", ")}>
                {data?.movieLink.join(", ")}
              </a>
            </span>
          </h2>
          <h2>
            Trailer Link :{" "}
            <span>
              <a href={data?.trailerLink}>{data?.trailerLink}</a>
            </span>
          </h2>
        </div>
      </Modal>
    </>
  );
};

export default ShowAllData;
