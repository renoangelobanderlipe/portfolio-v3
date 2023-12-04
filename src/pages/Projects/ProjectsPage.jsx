import { Breadcrumbs } from "@material-tailwind/react";
import { AppLayout } from "../../components/ui/AppLayout";
import { TableComponent } from "../../components/ui/TableComponent";
import { Link } from "react-router-dom";

const columns = ["Year", "Project Title", "About", "Category", "Tools Used", "Link"];

const rows = [
  {
    year: "2023",
    project_title: "Porfolio Illustration",
    about: "Lorem Ipsum dolor sit amet",
    category: ["Web Design", "Web Development"],
    tools_used: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    project_url: "example.google.com"
  },
  {
    year: "2023",
    project_title: "Porfolio Illustration",
    about: "Lorem Ipsum dolor sit amet",
    category: ["Web Design", "Web Development"],
    tools_used: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    project_url: "example.google.com"
  },
  {
    year: "2023",
    project_title: "Porfolio Illustration",
    about: "Lorem Ipsum dolor sit amet",
    category: ["Web Design", "Web Development"],
    tools_used: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    project_url: "example.google.com"
  },
  {
    year: "2023",
    project_title: "Porfolio Illustration",
    about: "Lorem Ipsum dolor sit amet",
    category: ["Web Design", "Web Development"],
    tools_used: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    project_url: "example.google.com"
  },
];

const ProjectsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[48px] w-full">
        <Breadcrumbs separator=">">
          <Link to="/" className="opacity-60">
            Home
          </Link>

          <a href="#">Breadcrumbs</a>
        </Breadcrumbs>
        <div >
          <TableComponent rows={rows} columns={columns} />
        </div>
      </div>

    </AppLayout>
  );
}

export default ProjectsPage;