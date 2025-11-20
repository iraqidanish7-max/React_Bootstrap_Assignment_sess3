const ConditionalRender1 = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return <h1>Welcome....</h1>
  } else {
    return <h1>Login Again....</h1>
  }
}

export default ConditionalRender1
