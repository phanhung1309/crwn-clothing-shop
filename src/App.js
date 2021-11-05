import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      // Component Did Mount
      setCurrentUser(user)
      console.log(user)

      // Component Will Unmount
      return () => {
        unsubcribeFromAuth()
      }
    })
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
