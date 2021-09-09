import styles from './Navbar.module.css';

const Navigation = () => {

    return (
        
      <nav className={styles.navbar}>
          <p className={styles.dashboard}>Dashboard</p>
          <ul>
              <li>
                  <a>Register</a>
                  <a>Login</a>
              </li>
          </ul>

          
      </nav>
           
            
       
    )

}

export default Navigation;