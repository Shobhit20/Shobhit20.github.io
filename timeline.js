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

// Add event listeners to each timeline item
timelineItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        // Check which item is being hovered and update the text block accordingly
        if (this.querySelector('.timeline-title').innerText.includes('Senior Data Scientist')) {
            document.querySelector('.text-block').innerHTML = `
                <h3>Roadzen (Jul 2020 - Aug 2023)</h3>
                <p>Worked as Senior Data Scientist focusing on model development and large-scale data analysis for automotive insurance solutions.</p>
                <p>Led a team to deploy machine learning models for real-time fraud detection and claims assessment, improving processing time by 25%.</p>
            `;
        } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Data Science Intern')) {
            document.querySelector('.text-block').innerHTML = `
                <h3>Spoonshot (Jan 2019 - Jul 2020)</h3>
                <p>Developed and optimized machine learning models to predict food trends using large datasets.</p>
                <p>Implemented unsupervised learning algorithms for customer segmentation, which improved targeted marketing efforts.</p>
            `;
        } else if (this.querySelector('.timeline-title').innerText.includes('B. Tech.')) {
            document.querySelector('.text-block').innerHTML = `
                <h3>B. Tech. in Information Technology and Mathematics (Aug 2015 - Jun 2019)</h3>
                <p>Specialized in IT and applied mathematics. Key projects included a recommendation system for e-commerce websites using collaborative filtering.</p>
            `;
        } else {
            // Reset to default (University of Edinburgh) if no other item is hovered
            setDefaultText();
        }
    });

    // On mouse leave, reset the text to default (University of Edinburgh)
    item.addEventListener('mouseleave', function() {
        setDefaultText();
    });
});