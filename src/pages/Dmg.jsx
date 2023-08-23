import Depts from "../components/departmentPages/Depts"

const Dmg = () => {
  return (
    <Depts dept={[process.env.REACT_APP_PATH_1,'Desktop Management']}/>
  )
}

export default Dmg