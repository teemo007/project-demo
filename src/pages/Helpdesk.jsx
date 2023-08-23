import Depts from "../components/departmentPages/Depts"

const Helpdesk = () => {
  return (
    <Depts dept={[process.env.REACT_APP_PATH_2,'Help Desk']}/>
  )
}

export default Helpdesk
