import React, { useState } from "react"
import SignUpModal from "./components/Modals/Signup"
import LoginModal from "./components/Modals/Login"

const ModalContext = React.createContext()

const ModalProvider = (props) => {
  const [modalSignUp, setModalSignUp] = useState()
  const [modalLogin, setModalLogin] = useState()
  const [userInfo, setUserInfo] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        modalSignUp,
        setModalSignUp,
        modalLogin,
        setModalLogin,
        userInfo,
        setUserInfo,
      }}
      {...props}
    >
      {props.children}
      {!!modalSignUp && (
        <SignUpModal open={modalSignUp} close={() => setModalSignUp(false)} />
      )}
      {!!modalLogin && (
        <LoginModal open={modalLogin} close={() => setModalLogin(false)} />
      )}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a UserProvider")
  }

  return context
}

export { ModalProvider, useModal }
