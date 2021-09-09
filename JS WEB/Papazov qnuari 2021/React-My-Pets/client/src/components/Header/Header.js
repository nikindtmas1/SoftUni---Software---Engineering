<header id="site-header">
    <nav class="navbar">
        
        <section class="navbar-dashboard">
            <div class="first-bar">
                <a href="#">Dashboard</a>
                <a class="button" href="#">My Pets</a>
                <a class="button" href="#">Add Pet</a>
            </div>
            <div class="second-bar">
                <ul>
                    <li>Welcome, {{username}}!</li>
                    <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </div>
        </section>
        <section class="navbar-anonymous">
            <ul>
                <li><a href="#"><i class="fas fa-user-plus"></i> Register</a></li>
                <li><a href="#"><i class="fas fa-sign-in-alt"></i> Login</a></li>
            </ul>
        </section>
    </nav>
        </header>

import styles from './Header.module.css';

const Header = () => {

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

export default Header;