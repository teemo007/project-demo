import Depts from "../components/departmentPages/Depts"


const Media = () => {
  return (
    <Depts dept={[process.env.REACT_APP_PATH_3,'Classroom Support']}/>
  )
}

export default Media
