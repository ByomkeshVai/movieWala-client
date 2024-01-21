type TFSidebarProps = {
  name: string;
};
const FeatureSidebar = ({ name }: TFSidebarProps) => {
  return (
    <div className="text-slate-50">
      <h2 className="font-bold text-4xl">Featured {name} to Watch Now</h2>
      <p className=" text-md my-5 ">Now Most {name} by days</p>
      <hr className="font-bold text-slate-50 border-1 w-80 border-slate-50" />
    </div>
  );
};

export default FeatureSidebar;
