import { useSearchParams } from 'react-router-dom'

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const age = searchParams.get('age')
  const city = searchParams.get('city')
  return (
    <>
      <h1>Filter Page</h1>
      <h1>Age is {age} </h1>
      <h1>City is {city} </h1>
      <button onClick={() => setSearchParams({ age: 50, city: 'New York' })}>
        Set params
      </button>
      <input
        type='text'
        onChange={(e) => setSearchParams({ age: e.target.value })}
      />
      <input
        type='text'
        onChange={(e) => setSearchParams({ city: e.target.value })}
      />
    </>
  )
}

export default FilterPage
