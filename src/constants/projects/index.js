import projectsDetails from './details';
import projectsImages from './images';
import projectsRoot from './root';
import projectsSelecteds from './selecteds';

const projects = projectsRoot;

projects.Details = projectsDetails;
projects.Images = projectsImages;
projects.Selecteds = projectsSelecteds;

export default projects;
export {
  projectsRoot as projects,
  projectsDetails,
  projectsImages,
  projectsSelecteds,
};
