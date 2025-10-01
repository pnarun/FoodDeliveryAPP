import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h2>Oops!!!</h2>
        <h3>You have landed to wrong page.</h3>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
  )
}

export default Error