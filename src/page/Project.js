import Footer from "../components/footer";
import { useState, useEffect } from "../lib";
import menu from "../components/menu";
import axios from "axios";

const Project = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/projectList`)
      .then((res) => res.json())
      .then((data) => setProject(data));

    // axios.get(`http://localhost:3000/projectList`)
    //     .then(({ data }) => setProject(data))

    // axios.get(`http://localhost:3000/users`)
    //     .then(({ data }) => setProject(data))
    // getAll().then(({ data }) => setProject(data))
  }, []);

  return `
    ${menu()}

    <main class="my-5">
    
        <div class="container">
        <h1 class="color__white bold font__size--60 text__60-1024 text__60-md text__60-xxs mb-5 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        Hire the world’s top designers
                </h1>
          <!--Section: Content--> 
         
          
        ${projects
          .map((project, index) => {
            return `
            <div class="container bootstrap snippets bootdey">
            <div class="profile card">
                <div class="profile-body">
                    <div class="profile-bio">
                        <div class="row">
                            <div class="col-md-5 text-center">
                                <img class="img-thumbnail md-margin-bottom-10" src="${project.image}" alt="">
                            </div>
                            <div class="col-md-7">
                                <h2>${project.title}</h2>
                                <span><strong>Job:</strong> Web Developer</span>
                                <span><strong>Position:</strong> Web Designer</span>
                                <hr>
                                <p>${project.description}</p>
                                
                            </div>
                        </div>    
                    </div>
              </div>
            </div>
        </div>             
          `;
          })
          .join("")} 
       
        </main> 
        <!-- Post -->
          
    <!--Main layout-->
       ${Footer()}
    `;
};

export default Project;
