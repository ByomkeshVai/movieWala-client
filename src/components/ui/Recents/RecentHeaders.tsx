type RecentHeadersProps = {
  name: string;
  color: string;
};
const RecentHeaders = ({ name, color }: RecentHeadersProps) => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <h2 className="font-semibold text-xl   ">Recent {name}</h2>
        <hr className="font-bold text-slate-50 border-1 w-80 border-slate-50 mt-2" />
        <hr
          className={`font-bold text-slate-50 border-4 w-32 border-${color}-700 mt-[-18px] rotate-120`}
        />
      </div>
      <div>
        <button className="border-1 border-slate-50 text-semibold p-2">
          View All
        </button>
      </div>
    </div>
  );
};

export default RecentHeaders;
