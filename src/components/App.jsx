import { useState, Fragment } from 'react'
import Search from './Search'
import Results from './Results'
import Forecast from './Forecast'

import { Route, Redirect } from 'react-router-dom'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  return(
    <main>

      <h1>Weather Forecast App</h1>

      <Route path="/search" component={Search} />
      <Route path="/search/:query" component={Results} />
      <Route path="/result/:cityId" component={Forecast} />

      <Route exact path="/">
        <Redirect to="/search"/>
      </Route>

      {/* <Route exact path="/">
        <Search title="hello there"/>
      </Route>

      <Route exact path="/" render={ (props) => <Search {...props} title="This is awesome"/> }/> */}

    </main>
  )
}

export default App

// - Add react router to index.js
// - Add routes to display components in App
// - Change handleSubmit in Search to push to history