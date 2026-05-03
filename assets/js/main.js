addEventListener("DOMContentLoaded", () => {

    const reviews = Array.from(document.querySelectorAll('.review'))

        reviews.forEach((review) => {
            review.addEventListener('click', () => {
                window.open('https://www.google.com/maps/place/Billy+D+Fitness/@53.8170046,-2.292134,12z/data=!4m8!3m7!1s0x290035bd5997a179:0xb9a03015abfeb71d!8m2!3d53.8169316!4d-2.2095623!9m1!1b1!16s%2Fg%2F11xrkzpn_h?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D');
        });
    });
});