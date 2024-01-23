import { Card } from "antd";
import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import FilterContent from "./FilterContent";
import { TMovie } from "../../redux/ReduxType/ReduxType";
import { useState } from "react";

type TItem = {
  key: string;
  label: string;
};

type AllMainSectionProps = {
  values: string;
  handleSingleMovie: (category: string, itemId: string) => void;
};

const AllMainSection = ({ values, handleSingleMovie }: AllMainSectionProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState<string | null>(
    null
  );

  const handleGenreSelect = (item: TItem) => {
    setSelectedFilter("genre");
    setSelectedFilterValue(item.label);
  };

  const handleLanguageSelect = (item: TItem) => {
    setSelectedFilter("language");
    setSelectedFilterValue(item.label);
  };

  const handleReleaseSelect = (item: TItem) => {
    setSelectedFilter("releaseYear");
    setSelectedFilterValue(item.label);
  };

  const handleQualitySelect = (item: TItem) => {
    setSelectedFilter("quality");
    setSelectedFilterValue(item.label);
  };

  const handleStarsSelect = (item: TItem) => {
    setSelectedFilter("stars");
    setSelectedFilterValue(item.label);
  };

  const handleResetFilters = () => {
    setSelectedFilter(null);
    setSelectedFilterValue(null);
  };

  const { data } = useGetmovieQuery({
    category: `${values}`,
    ...(selectedFilter === "genre" && { genre: selectedFilterValue }),
    ...(selectedFilter === "language" && { language: selectedFilterValue }),
    ...(selectedFilter === "releaseYear" && {
      releaseYear: selectedFilterValue,
    }),
    ...(selectedFilter === "quality" && { quality: selectedFilterValue }),
    ...(selectedFilter === "stars" && { stars: selectedFilterValue }),
  });

  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto">
      <div className="basis-1/4 text-slate-50 flex flex-col gap-5">
        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <div className="">
            <h2>Filter By Genre</h2>
          </div>
          <FilterContent
            data={data}
            categoryKey="genre"
            filterName="genre"
            onFilterSelect={handleGenreSelect}
            selectedFilterValue={selectedFilterValue}
          />
        </div>
        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <div>
            <h2>Filter By language</h2>
          </div>
          <FilterContent
            data={data}
            categoryKey="language"
            filterName="language"
            onFilterSelect={handleLanguageSelect}
            selectedFilterValue={selectedFilterValue}
          />
        </div>
        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <div>
            <h2>Filter By Release Date</h2>
          </div>
          <FilterContent
            data={data}
            categoryKey="releaseYear"
            filterName="releaseYear"
            onFilterSelect={handleReleaseSelect}
            selectedFilterValue={selectedFilterValue}
          />
        </div>
        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <div>
            <h2>Filter By Quality Date</h2>
          </div>
          <FilterContent
            data={data}
            categoryKey="quality"
            filterName="quality"
            onFilterSelect={handleQualitySelect}
            selectedFilterValue={selectedFilterValue}
          />
        </div>

        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <div>
            <h2>Filter By Stars Date</h2>
          </div>
          <FilterContent
            data={data}
            categoryKey="stars"
            filterName="stars"
            onFilterSelect={handleStarsSelect}
            selectedFilterValue={selectedFilterValue}
          />
        </div>
        <div className="text-slate-50 font-semibold flex flex-col gap-3 w-48">
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl shadow-md bg-red-500"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 py-5 basis-3/4">
        {data?.map((movieData: TMovie) => (
          <Card
            bordered={false}
            className="bg-[#0E0D12] "
            hoverable={true}
            key={movieData._id}
            onClick={() => handleSingleMovie(movieData.category, movieData._id)}
          >
            <div className=" group relative">
              <div className="">
                <img
                  className="object-cover h-64 "
                  src={movieData?.posterImage}
                  alt={movieData?.title}
                />
              </div>
              <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
                <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                  <h2 className=" text-slate-50 text-sm font-bold">
                    {movieData?.title} ({movieData?.releaseYear})
                  </h2>
                  <h2 className=" text-slate-50 text-sm font-semibold">
                    {movieData?.genre?.join(", ")}
                  </h2>
                  <h2 className=" text-slate-50 text-sm">
                    Rating: {movieData?.rating}
                  </h2>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllMainSection;
