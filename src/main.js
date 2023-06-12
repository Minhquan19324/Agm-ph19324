import HomePage from "./page/Home";
// import Navigo from "navigo"
import Project from "./page/Project";
import NotFoundPage from "./page/NotFoudPage";
import ProjectDetailPage from "./page/ProjectDetail";
import { router, render } from "./lib";
import ProjectManagementPage from "./page/Admin/ProjectManagement";
import UpdateProjectPage from "./page/Admin/UpdateProject";
import AddProjectPage from "./page/Admin/AddProject";

// document.querySelector('#app').innerHTML = HomePage()
const app = document.querySelector("#app");

// const render = (content,container) =>{
//     return container.innerHTML = content()
// }

// const router = new Navigo("/") //khoi tao router tu doi tuong Navigo

router.on("/", () => {
  //sung dung phuong thuc on de khai bao duong dan den tung page
  return render(HomePage, app);
});

router.on("/about", () => {
  return render(AboutPage, app);
});
router.on("/project", () => {
  return render(Project, app);
});
router.on("/project/:id", ({ data }) => {
  return render(() => {
    return ProjectDetailPage(data);
  }, app);
});

//admin
router.on("/admin", () => {
  return render(ProjectManagementPage, app);
});
router.on("/admin/project", () => {
  return render(ProjectManagementPage, app);
});
router.on("/admin/project/add", () => {
  return render(AddProjectPage, app);
});
router.on("/admin/project/update/:id", ({ data }) => {
  return render(() => {
    return UpdateProjectPage(data);
  }, app);
});
router.notFound(() => {
  return render(NotFoundPage, app);
});

router.resolve();
