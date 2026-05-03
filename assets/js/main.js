addEventListener("DOMContentLoaded", () => {

    const reviews = Array.from(document.querySelectorAll('.review'))

    reviews.forEach((review) => {
        review.addEventListener('click', () => {
            window.open('https://www.google.com/search?sa=X&sca_esv=36f6c3979d03146a&rlz=1C1AWFC_enGB1048GB1048&biw=1745&bih=835&sxsrf=ANbL-n4SnNOfacEjgPDittSGiLG5C5RMmQ:1777804764356&q=Billy+D+Fitness+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY2NzU3MTY3M7I0sjAxNDM1MdzAyPiKUdwpMyenUsFFwS2zJC-1uFghKLUsM7W8eBErLhkAkdYVBE8AAAA&rldimm=13375743762928416541&tbm=lcl&hl=en-NL&ved=2ahUKEwj9ltbr9pyUAxVdzAIHHdskLvQQ9fQKegQIQRAG#lkt=LocalPoiReviews')
        });
    });
});