import AboutComponent from "../../Components/about/about";
import { BoostProductivity } from "../../Components/blog/boost-productivity/BoostProductivity";


// Importing CSS module for styling
import style from './about.module.css';

export const About = () => {
  return (
    <div className={style.about_container}>
      <AboutComponent />
      <BoostProductivity />
    </div>
  );
};
