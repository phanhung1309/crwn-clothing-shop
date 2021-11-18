import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'

import './App.css'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // Component Did Mount
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            photoURL: userAuth.photoURL,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)

      // Component Will Unmount
      return () => {
        unsubcribeFromAuth()
      }
    })
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route
          path='/signin'
          render={() => {
            if (currentUser) return <Redirect to='/' />
            else {
              return <SignInAndSignUpPage />
            }
          }}
        />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
