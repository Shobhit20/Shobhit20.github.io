function setDefaultText() {
    document.querySelector('.text-block').innerHTML = `
        <h3>M. Sc. in Data Science - University of Edinburgh (Sep 2023 - Present)</h3>
        <p>Pursuing my Masters degree was a strategic decision to reconnect with academic rigor after gaining four years of industry experience in data science. I aimed to enhance my skills and stay current with the rapid advancements in the field. Returning to academia allowed me to deepen my technical expertise while engaging with emerging technologies critical to the future of data science. Additionally, when presented with the chance of joining an elite institution like University of Edinubrgh, I decided on pursuing it as an ideal next step to my career.</p>

        <p>I carefully selected courses that were both cutting-edge and aligned with my professional background, including Natural Language Processing, Natural Language Understanding, Extreme Computing, Practical Machine Learning, and Pattern Recognition in Financial Data. These subjects provided me with the theoretical and practical foundation to tackle complex industry challenges. </p>

        <p>For my dissertation, I focused on developing a Question Answering (QA) framework using large language models for financial analysis, addressing a real-world problem in the finance sector. I scraped 70GB of historical annual reports from FTSE All-Share companies and implemented a MapReduce-based approach with ranking to extract business insights. My research compared this method with Retrieval-Augmented Generation (RAG) and demonstrated a 16% improvement in results while maintaining equivalent processing times. </p>

        <p>This project not only honed my skills in big data and natural language processing but also aligned closely with current industry needs, preparing me for future challenges in data science. The combination of advanced coursework and hands-on research solidified my ability to apply innovative solutions to real-world problems, bridging academia and industry effectively.</p>
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
                <h3>Senior Data Scientist - Roadzen (Jan 2022 - Aug 2023)</h3>
                <p>In January 2022, I was promoted to Senior Data Scientist, a recognition of my contributions after just three years of experience. In this role, I led a team of three data scientists, managing collaboration with the engineering team to ensure smooth transitions from model development to production. This involved maintaining clear communication across teams to meet project goals efficiently.</p>

                <p>One of my key contributions was streamlining the machine learning workflow, from data ingestion to model serving, using FastAPI, Airflow, and Jenkins, in close collaboration with the engineering team. Additionally, I developed an insurance policy QA bot using GPT, enabling users to retrieve relevant policy details in under two seconds. </p>

                <p>Another notable achievement was extracting keyframes from car profile videos using a momentum-inspired heuristic, which significantly improved visual data processing. This contributed to a system that achieved over 90% accuracy in classifying car color, make, and model, expediting claims validation processes.</p>

                <p>Through these projects, I enhanced my technical and leadership skills, delivering impactful results that improved operational efficiency and customer service.</p>
            `;
        } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Roadzen')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML  = document.querySelector('.text-block').innerHTML = `
            <h3>Data Scientist - Roadzen (Jul 2020 - Dec 2021)</h3>

            <p>I joined Roadzen as a Data Scientist in July 2019, taking on a role focused heavily on solving vision-related problems within the insurance tech sector. My primary task was implementing advanced instance segmentation models to streamline claims processing, with a specific focus on car damage analysis and recognition. This work directly addressed industry needs for faster, more accurate assessments of vehicle damage.</p>

            <p>A major achievement during my time at Roadzen was developing and training a Mask R-CNN model for segmenting car damage, parts, and profiles using the PyTorch framework Detectron2. This solution reduced the time required for claims processing from 40 minutes to just 2 minutes, vastly improving operational efficiency. To further enhance performance, I designed a custom mean Average Precision (mAP) score of 74, accounting for the subjectivity in damage assessments. This was critical in an industry where multiple annotators might assess car damage differently, with some marking individual scratches and others grouping them into larger damage areas.</p>

            <p>In addition to model development, I optimized the Damage Recognition API, reducing its turnaround time by 30% through the use of TorchServe and FastAPI for deployment. My work gained significant recognition in the industry, earning accolades at the Asia Motor Insurance Summit and the Financial Express Future Tech Awards.</p>

            <p>This role not only expanded my technical expertise in computer vision and machine learning but also allowed me to deliver impactful solutions that addressed real-world challenges in insurance technology, significantly enhancing claims processing workflows.</p>
        `;
        } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Spoonshot')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML  = document.querySelector('.text-block').innerHTML = `
            <h3>Data Scientist - Spoonshot (Jan 2019 - Jun 2020)</h3>

            <p>I began my career as a Data Scientist at Spoonshot, a food tech startup, after completing a six-month internship as part of my final semester industrial project. Following the internship, I was offered a full-time position, where I worked on innovative projects focused on discovering novel flavor combinations that could be pitched to CPG companies like P&G and Coca-Cola. This experience laid the foundation for my growth in data science, particularly in the food domain.</p>

            <p>One of my key contributions was developing ingredient embeddings using a weighted DeepWalk algorithm, where ingredients were treated as nodes, and edge traversal probabilities were based on flavor pairing theory and ingredient co-occurrence. To handle the vast data scale, I built a PySpark pipeline to generate edge weights for 100 million ingredient combinations. These embeddings were then leveraged to recommend unique ingredient pairs to clients, helping them create new, innovative food products.</p>

            <p>Additionally, I implemented a Fast-RCNN model to extract nutrition panels from CPG products and used Azure OCR to standardize the nutrition information across various product formats. This helped streamline data extraction and processing for product analysis.</p>

            <p>Working in a small startup environment taught me the importance of ownership and exposed me to responsibilities beyond the typical role of a data scientist. I gained experience in end-to-end project management, collaboration across teams, and the flexibility needed to thrive in a dynamic startup setting, all of which helped me develop a strong foundation early in my career.</p>
        `;
        } else if (this.querySelector('.timeline-title').innerText.includes('B. Tech.')) {
            this.querySelector('.timeline-content').classList.add("active")
            document.getElementsByClassName('.text-block').innerHTML  = `
                    <h3>B. Tech. in IT and Mathematics - University of Delhi (Aug 2015 - Jun 2019)</h3>
                    <p>I completed my B.Tech in Information Technology and Mathematics, with a minor in Computational Biology. This degree provided me with a strong foundation in mathematical concepts such as linear algebra, probability, and statistics, while also teaching essential programming concepts like object-oriented programming (OOP). The curriculum was highly focused on practical application alongside theory, with projects in each subject that helped refine my theoretical and applied understanding.</p>

                    <p>During my studies, I pursued several internships, including one at the Defense Research and Development Organization (DRDO), which further honed my skills. I was introduced to courses in Natural Language Processing (NLP) and Artificial Intelligence (AI), which sparked my interest in data science and laid the groundwork for my future career in the field.</p>

                    <p>Beyond academics, I was actively involved in the college’s robotics society, Autonomi, where I served as the Social Media Manager. I also organized a data science hackathon, DataJam, which enhanced my leadership and event management skills. In my final semester, I transitioned to a full-time opportunity at Spoonshot after completing my industrial internship with them, marking the beginning of my professional journey in data science.</p>
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
                <h3>Senior Data Scientist - Roadzen (Jan 2022 - Aug 2023)</h3>
                <p>In January 2022, I was promoted to Senior Data Scientist, a recognition of my contributions after just three years of experience. In this role, I led a team of three data scientists, managing collaboration with the engineering team to ensure smooth transitions from model development to production. This involved maintaining clear communication across teams to meet project goals efficiently.</p>

                <p>One of my key contributions was streamlining the machine learning workflow, from data ingestion to model serving, using FastAPI, Airflow, and Jenkins, in close collaboration with the engineering team. Additionally, I developed an insurance policy QA bot using GPT, enabling users to retrieve relevant policy details in under two seconds. </p>

                <p>Another notable achievement was extracting keyframes from car profile videos using a momentum-inspired heuristic, which significantly improved visual data processing. This contributed to a system that achieved over 90% accuracy in classifying car color, make, and model, expediting claims validation processes.</p>

                <p>Through these projects, I enhanced my technical and leadership skills, delivering impactful results that improved operational efficiency and customer service.</p>
            `;
            } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Roadzen')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.querySelector('.text-block').innerHTML = `
                    <h3>Data Scientist - Roadzen (Jul 2020 - Dec 2021)</h3>

                    <p>I joined Roadzen as a Data Scientist in July 2019, taking on a role focused heavily on solving vision-related problems within the insurance tech sector. My primary task was implementing advanced instance segmentation models to streamline claims processing, with a specific focus on car damage analysis and recognition. This work directly addressed industry needs for faster, more accurate assessments of vehicle damage.</p>

                    <p>A major achievement during my time at Roadzen was developing and training a Mask R-CNN model for segmenting car damage, parts, and profiles using the PyTorch framework Detectron2. This solution reduced the time required for claims processing from 40 minutes to just 2 minutes, vastly improving operational efficiency. To further enhance performance, I designed a custom mean Average Precision (mAP) score of 74, accounting for the subjectivity in damage assessments. This was critical in an industry where multiple annotators might assess car damage differently, with some marking individual scratches and others grouping them into larger damage areas.</p>

                    <p>In addition to model development, I optimized the Damage Recognition API, reducing its turnaround time by 30% through the use of TorchServe and FastAPI for deployment. My work gained significant recognition in the industry, earning accolades at the Asia Motor Insurance Summit and the Financial Express Future Tech Awards.</p>

                    <p>This role not only expanded my technical expertise in computer vision and machine learning but also allowed me to deliver impactful solutions that addressed real-world challenges in insurance technology, significantly enhancing claims processing workflows.</p>
                `;
                console.log(document.querySelector('.text-block').innerHTML)
            } else if (this.querySelector('.timeline-title').innerText.includes('Data Scientist, Spoonshot')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.getElementsByClassName('.text-block').innerHTML  = document.querySelector('.text-block').innerHTML = `
                <h3>Data Scientist - Spoonshot (Jan 2019 - Jun 2020)</h3>
    
                <p>I began my career as a Data Scientist at Spoonshot, a food tech startup, after completing a six-month internship as part of my final semester industrial project. Following the internship, I was offered a full-time position, where I worked on innovative projects focused on discovering novel flavor combinations that could be pitched to CPG companies like P&G and Coca-Cola. This experience laid the foundation for my growth in data science, particularly in the food domain.</p>
    
                <p>One of my key contributions was developing ingredient embeddings using a weighted DeepWalk algorithm, where ingredients were treated as nodes, and edge traversal probabilities were based on flavor pairing theory and ingredient co-occurrence. To handle the vast data scale, I built a PySpark pipeline to generate edge weights for 100 million ingredient combinations. These embeddings were then leveraged to recommend unique ingredient pairs to clients, helping them create new, innovative food products.</p>
    
                <p>Additionally, I implemented a Fast-RCNN model to extract nutrition panels from CPG products and used Azure OCR to standardize the nutrition information across various product formats. This helped streamline data extraction and processing for product analysis.</p>
    
                <p>Working in a small startup environment taught me the importance of ownership and exposed me to responsibilities beyond the typical role of a data scientist. I gained experience in end-to-end project management, collaboration across teams, and the flexibility needed to thrive in a dynamic startup setting, all of which helped me develop a strong foundation early in my career.</p>
            `;
            } else if (this.querySelector('.timeline-title').innerText.includes('B. Tech.')) {
                this.querySelector('.timeline-content').classList.add("active")
                document.querySelector('.text-block').innerHTML = `
                    <h3>B. Tech. in IT and Mathematics - University of Delhi (Aug 2015 - Jun 2019)</h3>
                    <p>I completed my B.Tech in Information Technology and Mathematics, with a minor in Computational Biology. This degree provided me with a strong foundation in mathematical concepts such as linear algebra, probability, and statistics, while also teaching essential programming concepts like object-oriented programming (OOP). The curriculum was highly focused on practical application alongside theory, with projects in each subject that helped refine my theoretical and applied understanding.</p>

                    <p>During my studies, I pursued several internships, including one at the Defense Research and Development Organization (DRDO), which further honed my skills. I was introduced to courses in Natural Language Processing (NLP) and Artificial Intelligence (AI), which sparked my interest in data science and laid the groundwork for my future career in the field.</p>

                    <p>Beyond academics, I was actively involved in the college’s robotics society, Autonomi, where I served as the Social Media Manager. I also organized a data science hackathon, DataJam, which enhanced my leadership and event management skills. In my final semester, I transitioned to a full-time opportunity at Spoonshot after completing my industrial internship with them, marking the beginning of my professional journey in data science.</p>
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