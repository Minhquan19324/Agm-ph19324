import { update } from "../../api/project"
import admin from "../../components/admin"

import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#image").value,
                "url": document.querySelector("#url").value
            }

            update(newData).then(() => {
                router.navigate("/admin/project")
                //sau khi update thành công thì chuyển hướng về trang quản lý
            })
        })
    })
    return `
        ${admin()}
        
        <form action=""style="margin:10px 40px" id="update-form">
        <!-- Title input -->
            <label class="form-label" for="form7Example1">Title</label>
          <input  style="width: 600px;" type="text" class="form-control" placeholder="project title" id="title" value="${project.title}"  />     
        <!-- Email input -->
            <label class="form-label" for="form7Example2">Description</label>
          <input  class="form-control" placeholder="project description" id="description" value="${project.description}" />

        <label class="form-label" for="form7Example2">Image</label>
        <input  class="form-control" placeholder="project image" id="image" value="${project.image}" />

        <label class="form-label" for="form7Example2">Url</label>
        <input  class="form-control" placeholder="project url" id="url" value="${project.url}" />

    
          <div style="margin:50px" >
          <button class="btn btn-primary btn-block mb-4" >Update</button></div>
        </form>
       
    `
}

export default UpdateProjectPage