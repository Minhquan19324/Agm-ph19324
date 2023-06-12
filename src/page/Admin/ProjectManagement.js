import "../../../style.css"

import { getAll, remove } from "../../api/project"
import admin from "../../components/admin"
import { useEffect, useState } from "../../lib"
import axios from 'axios'
const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))

        getAll().then(({ data }) => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                remove(id).then(() => {
                    // console.log(remove);
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                    alert("Xoa thanh cong")
                })
            })
        }
    })
    return `
    ${admin()}
    
            <!-- Main -->
            <main class="main-container">
                <div class="main-title">                  
                    <a href="/admin/project/add"><button class="btn btn-primary btn-block mb-4" >Add New Project</button></a>         
                </div>
                <table class="table align-middle mb-0 bg-white">
     <thead class="bg-light ">
          <tr>
          <th>Stt</th>
            <th>Name</th>
            <th>Title</th>
            <th>Image</th>
            <th>Project Url</th>
            <th>Project Repository</th>
            <th>Actions</th>
          </tr>
        </thead>
              ${projects.map((project, index) => {
        return `
    
        
       
        <tbody>
        
         
          <tr>
          <td>
              
              <p class="text-muted mb-0">${index + 1}</p>
            </td>
            <td>
              <div class="d-flex align-items-center">
               
                   
                    
                <div class="ms-3">
                  <p class="fw-bold mb-1">${project.description}</p>
               
                </div>
              </div>
            </td>
            <td>
              
              <p class="text-muted mb-0">${project.title}</p>
            </td>
            <td>
              <img src="${project.image}">
            </td>
            <td>
              
              <p class="text-muted mb-0">${project.url}</p>
            </td>
            <td>
              
              <p class="text-muted mb-0">${project.repository}</p>
            </td>
            
            <td>
              <button  class="btn-remove btn btn-link " data-id="${project.id}">  
              Remove
              </button>
              <a href="/admin/project/update/${project.id}"><button class="btn btn-link">Update</button></a>
              
            </td>
          </tr>
        </tbody>
      
    
                `
    }).join("")}
    </table>
                
                  
    
                </div>
            </main>
            <!-- End Main -->
    
        </div>
    
        <!-- Scripts -->
        <!-- ApexCharts -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.3/apexcharts.min.js"></script>
        <!-- Custom JS -->
        <script src="script.js"></script>
    </body>
    
    </html>
    `
}
export default ProjectManagementPage



