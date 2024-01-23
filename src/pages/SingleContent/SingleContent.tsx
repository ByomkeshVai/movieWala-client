import { TMovie } from "../../redux/ReduxType/ReduxType";

type SingleContentProps = {
  data: TMovie;
};
const SingleContent = ({ data }: SingleContentProps) => {
  return (
    <div className="">
      <div className="w-3/4 mx-auto py-10 m-10">
        <div
          style={{ backgroundImage: `url(${data?.posterImage})` }}
          className="bg-cover object-cover bg-center "
        >
          <div className="flex items-center justify-between border-2  backdrop-blur-sm bg-black/90 p-12 shadow-xl rounded-lg">
            <div className="poster w-[30%] h-auto">
              <img src={data?.posterImage} alt="" />
            </div>
            <div className="details w-[60%] flex flex-col gap-3">
              <h2 className="text-slate-50 text-2xl ">
                Name:
                <span className="ml-3">
                  {data?.title} ({data?.releaseYear})
                </span>
              </h2>
              <hr
                className={`font-bold text-slate-50 lg:border-2 lg:w-full border-slate-50  rotate-120 hidden lg:flex`}
              />
              <h2 className="text-slate-50 text-md">
                Genres:
                <span className="ml-3">{data?.genre?.join(", ")}</span>
              </h2>
              <h2 className="text-slate-50 text-md">
                Language:
                <span className="ml-3">{data?.language?.join(", ")}</span>
              </h2>
              <h2 className="text-slate-50 text-md">
                Stars:
                <span className="ml-3">{data?.stars?.join(", ")}</span>
              </h2>
              <h2 className="text-slate-50 text-md">
                Plot:
                <span className="ml-3">{data?.description}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <h2>hello</h2>
      </div>
    </div>
  );
};

export default SingleContent;
