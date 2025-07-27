document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.dropdown-arrow');
        
        // Set initial state - all answers hidden
        answer.style.display = 'none';
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            if (isOpen) {
                // Close the FAQ
                answer.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
                item.classList.remove('active');
            } else {
                // Close all other FAQs first
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherArrow = otherItem.querySelector('.dropdown-arrow');
                    otherAnswer.style.display = 'none';
                    otherArrow.style.transform = 'rotate(0deg)';
                    otherItem.classList.remove('active');
                });
                
                // Open the clicked FAQ
                answer.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
                item.classList.add('active');
            }
        });
    });
});