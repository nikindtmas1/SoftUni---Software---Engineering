import styles from './Navbar.module.css';

const Navigation = () => {

    return (
        
      <nav className={styles.navbar}>
          <p className={styles.dashboard}>Dashboard</p>
          <ul>
              <li>
                  <a>Go to 1</a>
              </li>
          </ul>

          
      </nav>
           
            
       
    )

}

export default Navigation;