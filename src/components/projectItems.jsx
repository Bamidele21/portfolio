import projectData from "../assets/assets";

function ProjectItem({title, image, disc,url, id}) {



    return (
        <div  onClick={()=>window.open(url)} className="project-item">
            <h1>{title}</h1>
            <img src={image} alt={title} height= "290px" width="380px"/>
            
            <p>{disc}</p>
        </div>
    );
}

export default ProjectItem;
