function setDefaultText() {
    document.querySelector('.text-block').innerHTML = `
        <h4>Modules Taken</h4>
        <p>Natural Language Processing, Machine Learning Practical, Extreme Computing, Image and Vision Computing, Natural Language Understanding, Pattern Recognition in Financial Data</p>
        <h4>Dissertation Project (QA framework for long financial PDFs)</h4>
        <p>Historical annual reports scraped for FTSE all-share accounting for 70GB data. </p>
        <p>Implemented Map Reduce with ranking to perform Question Answering for extracting business insights. </p>
        <p>16% improvements in results with equivalent processing time compared to RAG. </p>
    `;
}

// Call the function when the page loads to set default text
window.onload = setDefaultText;

// Select all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
let isClicked = false; // Flag to track if an item has been clicked

// Add event listeners to each timeline item for click event
timelineItems.forEach(item => {
    // Click Event
    item.addEventListener('click', function() {
        // Mark that an item has been clicked
        document.querySelectorAll('.timeline-content.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });

        isClicked = true;
        console.log(this.querySelector('.timeline-content').classList)
        // Check which item is clicked and update the text block accordingly
        if (this.querySelector('.timeline-title').innerText.includes('Senior Data Scientist')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML = `
                <h3>Roadzen (Jul 2020 - Aug 2023)</h3>
                <p>Worked as Senior Data Scientist focusing on model development and large-scale data analysis for automotive insurance solutions.</p>
                <p>Led a team to deploy machine learning models for real-time fraud detection and claims assessment, improving processing time by 25%.</p>
            `;
        } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Spoonshot')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML  = `
                <h3>Spoonshot (Jan 2019 - Jul 2020)</h3>
                <p>Developed and optimized machine learning models to predict food trends using large datasets.</p>
                <p>Implemented unsupervised learning algorithms for customer segmentation, which improved targeted marketing efforts.</p>
            `;
        } else if (this.querySelector('.timeline-title').innerText.includes('B. Tech.')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML  = `
                <h3>B. Tech. in Information Technology and Mathematics (Aug 2015 - Jun 2019)</h3>
                <p>Specialized in IT and applied mathematics. Key projects included a recommendation system for e-commerce websites using collaborative filtering.</p>
            `;
        } else {
            // Reset to default (University of Edinburgh) if no other item is clicked
            this.querySelector('.timeline-content').classList.add("active")
            setDefaultText();
        }
    });

    // Hover Event (only if no click has been performed)
    item.addEventListener('mouseover', function() {
        document.querySelectorAll('.timeline-content.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });
        if (!isClicked) {
            // Check which item is being hovered and update the text block accordingly
            if (this.querySelector('.timeline-title').innerText.includes('Senior Data Scientist')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.querySelector('.text-block').innerHTML = `
                    <h3>Roadzen (Jul 2020 - Aug 2023)</h3>
                    <p>Worked as Senior Data Scientist focusing on model development and large-scale data analysis for automotive insurance solutions.</p>
                    <p>Led a team to deploy machine learning models for real-time fraud detection and claims assessment, improving processing time by 25%.</p>
                `;
            } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.querySelector('.text-block').innerHTML = `
                    <h3>Spoonshot (Jan 2019 - Jul 2020)</h3>
                    <p>Developed and optimized machine learning models to predict food trends using large datasets.</p>
                    <p>Implemented unsupervised learning algorithms for customer segmentation, which improved targeted marketing efforts.</p>
                `;
                console.log(document.querySelector('.text-block').innerHTML)
            } else if (this.querySelector('.timeline-title').innerText.includes('B. Tech.')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.querySelector('.text-block').innerHTML = `
                    <h3>B. Tech. in Information Technology and Mathematics (Aug 2015 - Jun 2019)</h3>
                    <p>Specialized in IT and applied mathematics. Key projects included a recommendation system for e-commerce websites using collaborative filtering.</p>
                `;
            } else if (this.querySelector('.timeline-title').innerText.includes('M. Sc')){
                this.querySelector('.timeline-content').classList.add("active")
                setDefaultText()
            }
        }
    });

    
});

// Reset flag on window load or refresh to reset the default text
window.addEventListener('click', function() {
    isClicked = false;
});