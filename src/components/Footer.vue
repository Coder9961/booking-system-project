<template>
    <footer class="footer-distributed">
        <div class="footer-left">
            <h3>RTC-Korphil Dormitory</h3>

            <p class="footer-links">
                <a href="#">Home</a>
                <a href="#">Rooms</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </p>

            <p class="footer-dormitory-name">
                Copyright © 2024 Reserved RTC-Korphil Alli Rights Reserved 2024     
            </p>
        </div>
        <div class="footer-center">
            <div class="footer-contacts">
                <font-awesome-icon style="color: white; margin-right: 12px;" :icon="['fas', 'map-marker-alt']" />
                <p> RTC Korphil Buhisan Tibungco Davao City</p>
            </div>
            <div class="footer-contacts">
                <font-awesome-icon style=" color:white; margin-right: 10px;" :icon="['fas', 'phone-alt']" />
                <p>0+70000</p>
            </div>
            <div class="footer-contacts">
                <font-awesome-icon style=" color:white; margin-right: 10px;" :icon="['fas', 'envelope']" />
                <p><a href="#">hello@korphil@gmail.com</a></p>
            </div>
        </div>

        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the Dormitory</span>
                <strong>Jarold Cabiles </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div class="footer-icons">
                <a href="#"><font-awesome-icon style="margin-right: 8px;" :icon="['fas', 'phone-alt']" /></a>
                <a href="#"><font-awesome-icon style="margin-right: 8px;" :icon="['fas', 'phone-alt']" /></a>
                <a href="#"><font-awesome-icon style="margin-right: 8px;" :icon="['fas', 'phone-alt']" /></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

footer {
    bottom: 0;
}

@media (max-height:800px) {
    footer {
        position: static;
    }
    header {
        padding-top: 40px;
    }
}

.footer-distributed {
    background-color: #2d2a30;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px Arial;
    padding: 50px 50px 60px 50px;
    margin-top: 80px;
}

.footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}

.footer-dormitory-name {
    color: white;
    font-weight: lighter;
    font-size: 12px;
}

.footer-contacts {
        margin-top: 14px;
    }

/* Footer left */

.footer-distributed .footer-left {
    width: 30%;
}

.footer-distributed h3 {
    color: #ffffff;
    font: normal 36px 'Arial', cursive;
    margin: 0;
}


.footer-distributed h3 span {
    color: #e0ac1c;
}

/* Footer links */

.footer-distributed .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
    margin-left: 10px;
}

.footer-distributed .footer-company-name {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    color: #e0ac1c;
    text-decoration: none;
    ;
}

/* Footer Right */

.footer-distributed .footer-right {
    width: 30%;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}

.footer-distributed .footer-icons a:hover {
    background-color: #3F71EA;
}

.footer-links a:hover {
    color: #3F71EA;
}

@media (max-width: 880px) {
    .footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
    .footer-distributed .footer-center i {
        margin-left: 0;
    }
    .footer-contacts {
        margin-top: 10px;
    }
}       

</style>