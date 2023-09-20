import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen-dvh font-sans">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {typeof error === 'object' && error !== null && (
        <p>
          <i>
            {('statusText' in error &&
              typeof error.statusText === 'string' &&
              error.statusText) ||
              ('message' in error &&
                typeof error.message === 'string' &&
                error.message)}
          </i>
        </p>
      )}
    </div>
  )
}

export default ErrorPage
