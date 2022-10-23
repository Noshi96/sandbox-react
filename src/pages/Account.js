import { useParams } from 'react-router-dom'

const Account = () => {
  const { userName } = useParams()

  return <h1>{userName[0].toUpperCase() + userName.slice(1)} Account</h1>
}

export default Account
