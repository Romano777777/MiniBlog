// CSS
import style from "./About.module.css";
import  {Link}  from "react-router-dom"

const About = () => {
  return (
    <div className={style.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Esse Projeto consiste em um blog feito com React no front-end e Firebase
        no back-end
      </p>

      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
