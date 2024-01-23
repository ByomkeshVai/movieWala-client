import { Button } from "antd";
import "./Banner.style.css";
type TBannerProps = {
  imgLink: string;
};

const Banner = ({ imgLink }: TBannerProps) => {
  return (
    <div className="banner-area py-10 bg-banner-pattern bg-blend-multiply mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-between px-10  relative z-20 max-w-screen-2xl mx-auto ">
        <div className="text-area mt-10">
          <h2 className="font-bold lg:text-3xl text-slate-100">
            Pirates of the Caribbean: On Stranger Tides
          </h2>
          <h4 className="lg:text-lg text-sm text-slate-100 mt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one.
          </h4>

          <div className="flex gap-5 mt-5">
            <Button className="font-semibold text-slate-100  transition-colors">
              Watch Now
            </Button>
          </div>
        </div>
        <div>
          <img src={imgLink} alt="" className="h-auto w-auto" />
        </div>
      </div>
      ;
    </div>
  );
};

export default Banner;
