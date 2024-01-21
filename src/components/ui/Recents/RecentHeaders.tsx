type RecentHeadersProps = {
  name: string;
  color: string;
};
const RecentHeaders = ({ name, color }: RecentHeadersProps) => {
  return (
    <div className="flex justify-between items-center py-5">
      <div>
        <h2 className="font-semibold text-xl">Recent {name}</h2>
        <hr className="font-bold text-slate-50 border-1 w-80 border-slate-50 mt-2" />
        <hr
          className={`font-bold text-slate-50 border-4 w-32 border-${color}-700 mt-[-18px] rotate-120`}
        />
      </div>
      <div>
        <button
          className={`border-2 border-slate-50 rounded-xl shadow-lg px-4 py-2 hover:bg-${color}-700 transition-colors`}
        >
          <span className="font-semibold">All {name}</span>
        </button>
      </div>
    </div>
  );
};

export default RecentHeaders;
