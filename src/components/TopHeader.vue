<template>
  <div>
  <div class="top-bar">
    <div class="contact-info">
      <span><font-awesome-icon style="color: white; margin: 0px 9px 0 0" :icon="['fas', 'map-marker-alt']" />
      RTC Korphil Buhisan Tibungco Davao City</span>
      <span class="contact-information"><font-awesome-icon style="margin-right: 8px;" :icon="['fas', 'phone-alt']" />
    0 - 70000</span>
  </div>
    <ul>
      <li><RouterLink to="/login">Login</RouterLink></li>
      <li><RouterLink style="margin-right: 5px;" to="/register">Register</RouterLink><</li>
    </ul>
  </div>

  <nav>
    <div class="logo">
      <RouterLink to="/"><img src="../assets/images/rtc-logo.png" alt="logo">RTC - Korphil Dormitory</RouterLink>
    </div>

    <div class="toggle">
      <font-awesome-icon style="color: black;" :icon="['fas', 'bars']" />
      <RouterLink to="/">Home</RouterLink>
    </div>

    <ul class="menu">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/rooms">Rooms</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <RouterLink to="/booking">
      <button>Book Now</button>
    </RouterLink>
    </ul>
  </nav>
</div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }

  a, a:hover {
    text-decoration: none;
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    background: #1f1f1f;
  }

  .top-bar span{
    color: #fff;
  }

  .top-bar ul{
    list-style: none;
    display: flex;
  }

  .top-bar li {
    margin: 0px 5px
  }

  .top-bar a {
    color: #fff;
  }

  .top-bar a:hover {
    color: #dd9e17;
  }

  nav {
    background: #ffffff;
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }

  nav a {
    color: #1f1f1f;
  }

  nav a:active {
    color: #8a0202;
  }

  nav a:hover {
    color: #dd9e17;
  }

  .logo {
    flex: 1;
  }

  .logo a {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .logo a:hover {
    color: #1f1f1f;
  }

  .logo img {
    width: 60px;
    margin-right: 10px;
  }

  .menu {
    display: flex;
    align-self: center;
    list-style: none;
  }

  .menu li {
    padding: 15px 10px;
    font-size: 16px;
  }

  .toggle {
    font-size: 30px;
    display: none;
  }

  button {
    margin-left: 3em;
    margin-right: 50px;
    background: #dd9e17;
    border: none;
    padding: 14px 30px;
    border-radius: 8px;
    font-weight: bolder;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #1f1f1f;
      color: white;
      
    }
  }

  .contact-information {
    margin-left: 50px;

  }

  @media screen and (max-width: 600px){
    nav {
      display: block;
      position: relative;
      padding: 15px 20px;
    }

    .menu {
      margin-top: 15px;
      display: none;
    }

    .top-bar span {
      font-size: 10px;
      margin-top: 1px;
      line-height: -5px;
    }

    font-awesome-icon {
      font-size: 5px;
    }

    .logo a {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .logo img {
    width: 40px;
    margin-right: 10px;
  }

  .contact-information {
    display: block;
    margin: auto;
  }
  }

  @media screen and (max-width: 300px){
    nav {
      display: block;
      position: relative;
      padding: 5px 10px;
    }

    .menu {
      margin-top: 15px;
      display: none;
    }
  }
</style>
