import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className='text-center'>
          <h4 className='text-center font-bold text-4xl'>404 Page Not Found</h4>
          <p className='mt-6'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            to='/'
            className='mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg'
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }
  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>There was an error...</h4>
      <p className='mt-4'>{error.statusText || error.message}</p>
      <Link
        to='/'
        className='mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg'
      >
        Back to Home
      </Link>
    </main>
  )
}

export default Error
