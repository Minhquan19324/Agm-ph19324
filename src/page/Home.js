import footer from "../components/footer";
import Footer from "../components/footer";
import Header from "../components/header";

import menu from "../components/menu";

const HomePage = () => {
  // console.log(postList);
  return `      
      ${menu()}
      ${Header()}
      ${Footer()}
           
    `;
};

export default HomePage;
