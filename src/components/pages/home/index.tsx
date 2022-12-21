import { Helmet, HelmetProvider } from 'react-helmet-async'
import Home from './Home'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ChatFlow</title>
        </Helmet>
      </HelmetProvider>

      <Home />
    </>
  )
}

export default index
