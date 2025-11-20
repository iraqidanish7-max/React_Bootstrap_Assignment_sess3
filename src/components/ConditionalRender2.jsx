const ConditionalRender2 = ({isLoggedIn}) => {
  return (
    <div>
      {
        isLoggedIn ? <h1>Hello</h1>  : <h1>Try Again</h1>
      }

      {isLoggedIn && <h1>Welcome Again,..</h1>}
    </div>
  )
}

export default ConditionalRender2
