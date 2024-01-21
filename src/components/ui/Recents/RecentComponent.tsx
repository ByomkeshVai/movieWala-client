import RecentAnime from "./RecentAnime";
import RecentMovie from "./RecentMovie";
import RecentSeries from "./RecentSeries";

const RecentComponent = () => {
  return (
    <div className="text-slate-50">
      <RecentAnime />
      <RecentSeries />
      <RecentMovie />
    </div>
  );
};

export default RecentComponent;
