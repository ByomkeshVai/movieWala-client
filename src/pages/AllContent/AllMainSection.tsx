import { Button, Card, Dropdown, Menu } from "antd";
import { TMovie } from "../../redux/ReduxType/ReduxType";
import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";

type TItem = {
  key: string;
  label: string;
};

const AllMainSection = () => {
  const { data } = useGetmovieQuery({ category: "Movie" });

  const transformDataToItems = (data: TMovie[] | undefined): TItem[] => {
    const itemsSet = new Set<string>();

    const items =
      data
        ?.flatMap((item) => item.genre ?? [])
        .filter((genre) => genre && !itemsSet.has(genre) && itemsSet.add(genre))
        .map((genre) => ({ key: genre, label: genre })) ?? [];

    return items;
  };

  const items: TItem[] = transformDataToItems(data);

  const handleMenuClick = (item: TItem) => {
    console.log(item.key, item.label);
    // Do something with the key and label values
  };

  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto">
      <div className="basis-1/4 text-slate-50">
        <Dropdown
          overlay={
            <Menu onClick={handleMenuClick}>
              {items.map((item) => (
                <Menu.Item key={item.key} onClick={() => handleMenuClick(item)}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          }
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <div>
          <h2>Filter By Category</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 py-5 basis-3/4">
        {data?.map((movieData: TMovie) => (
          <Card
            bordered={false}
            className="bg-[#0E0D12] "
            hoverable={true}
            key={movieData._id}
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
