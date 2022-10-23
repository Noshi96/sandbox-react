import { useNavigate } from 'react-router-dom'

const PageOne = () => {
  const navigate = useNavigate()
  const navigateToFilter = () => {
    navigate('/filter')
  }
  return (
    <>
      <h1>PageOne</h1>
      <button onClick={() => navigate('/page-2')}>
        Click here to navigate to Page 2
      </button>
      <button onClick={navigateToFilter}>
        Click here to navigate to Filter
      </button>
    </>
  )
}
export default PageOne
