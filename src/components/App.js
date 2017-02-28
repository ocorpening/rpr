import React from 'react';
import YeomanImage from './YeomanImage';
import appStyle from './app.css';
import expressCSS from './express-scripts.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className={expressCSS.container}>
        <form id="login" className={expressCSS.loginBox}>
          <h1 className={expressCSS.loginTitle}>Log In</h1>
          <fieldset id="inputs" className={expressCSS.inputs}>
            <label htmlFor="username" className={expressCSS.hide}>Username</label>
            <input className="username" id="username" name="username" type="text" placeholder="Username" autoFocus required aria-required="true" />
              <label htmlFor="password" className={expressCSS.hide}>Password</label>
              <input className="password" id="password" name="password" type="password" placeholder="Password" required aria-required="true" />
          </fieldset>
          <fieldset id="actions" className={expressCSS.actions}>
            <a title="Forgot your password?" href="" className={expressCSS.link}>Forgot your password?</a>
            <a title="Register for an Account" href="" className={expressCSS.link}>Register</a>
            <button className={expressCSS.login} type="submit">Log in</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
