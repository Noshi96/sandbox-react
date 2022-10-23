import { Link, useParams, Outlet } from 'react-router-dom'

const User = () => {
  const { userName } = useParams()
  return (
    <>
      <h1>{`User ${userName[0].toUpperCase() + userName.slice(1)} Page`}</h1>
      <nav>
        <ul>
          <li>
            <Link to='profile' state={{ userState: 'High' }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to='account' state={{ userState: 'Low' }}>
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
export default User
