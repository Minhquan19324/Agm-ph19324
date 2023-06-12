import { add } from "../../api/project";
import admin from "../../components/admin";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
  useEffect(() => {
    const addForm = document.querySelector("#add-form");
    addForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newProject = {
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        image: document.querySelector("#image").value,
      };
      add(newProject).then(() => {
        router.navigate("/admin/project");
      });
    });
  });
  return /*html*/ `
    ${admin()}
        <form action="" style="margin:10px 40px" id="add-form">
        <div class="form-outline mb-4">
        <label class="form-label" for="form5Example1">Title</label>
        <input type="text" style="width: 600px;" placeholder="Project title" id="title" class="form-control" required />

        <label class="form-label" for="form5Example1">DES</label>
        <input type="text" style="width: 600px;" placeholder="Project description" id="description" class="form-control" required />
    
        <label class="form-label" for="form5Example1">Image</label>
        <input type="text" style="width: 600px;"placeholder="Project image" id="image"class="form-control"  required/>
        
        <div style="margin:30px 10px 80px 400px" >
        <button  class="btn btn-primary btn-inline mb-4">Add Form</button>
        </div>
          </form>
        </form>
    `;
};

export default AddProjectPage;
