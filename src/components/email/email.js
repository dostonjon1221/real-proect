
import "./email.css"
const Email = () => {
  return (
    <div className="main">
      <div className="container">
      <div className="title">
      <h1>What’s your email?</h1>
      <p>We’ll send you a sign-in code</p>

      <div className="input-item">
        <form className="form-item">
        <div className="forms-item">

        <input type="text"  className="email-item" placeholder="email"/>
        </div>
        
          <button className="btn-item">next</button>
        </form>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Email
