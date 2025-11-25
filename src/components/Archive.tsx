import image from "../assets/imgs/GROUP.png";
import profile from '../assets/imgs/profile/kantran.svg';

export default function Archive() {
  return(
    <>
      <div className="bg-primary overflow-hidden">
        <div id="archive" className="mt-2 ml-2 mr-2">
          <img src={image} alt="" />
        </div>

        <div className="flex-none ml-2 mr-2 mt-20 bg-primary mb-2">
          <img src={profile} alt="Img" className="w-full h-auto block" />
        </div>
      </div>

    </>
  )
}