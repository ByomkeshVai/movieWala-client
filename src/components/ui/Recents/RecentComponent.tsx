import Banner from "../Banner/Banner";
import RecentAnime from "./RecentAnime";
import RecentMovie from "./RecentMovie";
import RecentSeries from "./RecentSeries";

const RecentComponent = () => {
  return (
    <div className="text-slate-50 flex flex-col gap-10 py-10 px-10">
      <RecentAnime />
      <RecentSeries />
      <RecentMovie />
      <Banner imgLink="https://script.viserlab.com/playlab/demo/assets/images/item/landscape//uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg" />
    </div>
  );
};

export default RecentComponent;
