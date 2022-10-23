import { useParams, useLocation } from 'react-router-dom'
const Profile = () => {
  const location = useLocation()
  const { userName } = useParams()
  console.log(location)
  return <h1>{userName[0].toUpperCase() + userName.slice(1)} Profile</h1>
}

export default Profile
