<script setup>
import TopHeader from '@/components/TopHeader.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <TopHeader />
    <div class="overall-container">
        
        <div class="login-box">
            <div class="login-header">
                <header>
                    Register
                </header>
                <p>Please fill up the form</p>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Are you a student? Employee? Guest?" autocomplete="off" required>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Name" autocomplete="off" required>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Email" autocomplete="off" required>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Password" autocomplete="off" required>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Confirm Password" autocomplete="off" required>
            </div>
            <div class="input-submit">
                <button class="submit-btn" id="submit">
                    Create Account
                </button>
            </div>
            <div class="sign-up-link">
                <p>Already had an account? <RouterLink to=""> Login now</RouterLink></p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }
    .overall-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .login-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 440px;
        height: 480px;
        padding: 80px;
    }

    .login-header {
        text-align: center;
        margin: 20px 0 40px 0;
    }

    .login-header header {
        color: #333;
        font-size: 30px;
        font-weight: 600;
    }

    .input-box .input-field{
        width: 100%;
        height: 60px;
        font-size: 17px;
        padding: 0 25px;
        margin-bottom: 15px;
        border-radius: 30px;
        border: 1px solid black;
        box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.05);
        outline: none;
        transition: .3s;
    }
    ::placeholder {
        font-weight: 500;
        color: #222;
    }
    .input-field:focus {
        width: 105%;
    }
    .forgot {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px
    }
    section {
        display: flex;
        align-content: center;
        font-size: 14px;
        color: #555;
    }
    #check {
        margin-right: 10px;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
    section a{
        color: #555;
    }
    .input-sumbit {
        position: relative;
    }
    .submit-btn {
        width: 100%;
        height: 60px;
        background: #222;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: .3s;
        color: white;
        font-size: 18px;
        font-weight: bold;

        .submit-btn:hover {
            background: #000;
            transform: scale(1.05,1);
        }
    }
    .input-submit label {
        position: absolute;
        top: 45%;
        left: 50%;
        color: #fff;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    .sign-up-link {
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
    }
    .sign-up-link a {
        color: #000;
        font-weight: 600;
    }



</style>