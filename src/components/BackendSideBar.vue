<script setup>
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
        list.forEach(item=>{
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
    }

    list.forEach(item => item.addEventListener("mouseover", activeLink));

    // Menu Toggle
    // let toggle = document.querySelector(".toggle");
    // let navigation = document.querySelector(".navigation");
    // let main = document.querySelector(".main");

    // toggle.onclick = function() {
    //     navigation.classList.toggle("active");
    //     main.classList.toggle("active")
    // };
</script>

<template>
    <body>
        <div class="container">
            <div class="navigation">
                <ul>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Brand</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Dashboard</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Booking Requests</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Manage Rooms</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Users</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon"><font-awesome-icon style="color: black;" :icon="['fas', 'bars']" /></span>
                            <span class="title">Sign out</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <div class="main">
                <div class="topbar">
                    <div class="toggle">
                        <font-awesome-icon style="color: black;" :icon="['fas', 'bars']" />
                    </div>

                    <div class="search">
                        <label>
                            <input type="text" placeholder="Search here" >    
                            <font-awesome-icon class="search-icon" :icon="['fas', 'bars']" />                      
                        </label>
                    </div>

                    <div class="user">
                        <img src="../assets/images/headline-photo.jpg" alt="rtc logo">
                    </div>
                </div>
                <div class="container">
        <div class="cardBox">
            <div class="card">
                <div>
                    <div class="numbers">1,504</div>
                    <div class="cardName">Daily Views</div>
                </div>
            </div>
        </div>
</div>
            </div>

                
    </body>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'poppins';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100%;
        overflow-x: hidden;
    }

    /* sidebar */

    .container {
        position: relative;
        width: 100%;
    }
    .navigation {
        position: fixed;
        width: 300px;
        height: 100%;
        background: rgb(77, 77, 223);
        border-left: 10px solid var(--blue);
        transition: 0.5s;
        overflow: hidden;
    }
    /* .navigation.active {
        width: 500px;
    } */
    .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .navigation ul li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    .navigation ul li:hover,
    .navigation ul li.hovered {
        background-color: white;
    }
    .navigation ul li:nth-child(1) {
        margin-bottom: 40px;
        pointer-events: none;
    }
    
    .navigation ul li a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: white;
    }
    .navigation ul li:hover a,
    .navigation ul li.hovered a{
        color: blue;
    }

    .navigation ul li a .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 75px;
        text-align: center;
    }

    .navigation ul li a .icon font-awesome-icon{
        font-size: 1.75rem; 
    }
    .navigation ul li a .title {
        position: relative;
        display: block;
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        text-align: start;
        white-space: nowrap;
    }

    .navigation ul  li:hover a::before, 
    .navigation ul  li.hovered a::before {
        content: '';
        position: absolute;
        right: 0;
        top: -50px;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px rgb(255, 255, 255);
        pointer-events: none;
    }

    .navigation ul  li:hover a::after, 
    .navigation ul  li.hovered a::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -50px;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 35px -35px 0 10px rgb(255, 255, 255);
        pointer-events: none;
    }

    /* Main top Header */

    .main {
        position: absolute;
        width: calc(100% - 300px);
        left: 300px;
        min-height: 100vh;
        background: white;
        transition: .5s;
    }
    .topbar {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .toggle {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        cursor: pointer;
    }
    .search {
        position: relative;
        width: 400px;
        margin: 0 10px;
    }
    .search label {
        position: relative;
        width: 100%;
    }

    .search label input{
        position: relative;
        width: 100%;
        height: 40px;
        border-radius: 40px;
        padding: 5px 20px;
        padding-left: 35px;
        font-size: 18px;
        outline: none;
        border: 1px solid black;
    }
    .search label .search-icon {
        position: absolute;
        top: 0;
        left: 10px;
        font-size: 1.2rem;
    }

    .user {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }

    .user img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
</style>

