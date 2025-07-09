from wordcloud import WordCloud
import matplotlib.pyplot as plt
import numpy as np

# Your dictionary of skills with weights
skills = {
    "Python":9, "SQL":8, "HTML":5, "CSS":5, "C/C++":5,
    "Regression":8, "Dimensionality reduction":9, "Random Forest":8,"XGBoost":6,
    "Adaboost":6, "Clustering":7, "Embeddings":8, "RNN":8, "LSTM":8, "Encoder-decoder models":8, 
    "Transformers":9, "LLM":9, "BERT":6, "Retrieval Augmented Generation (RAG)":8, "Vector DB":4, 
    "HOG":5, "SIFT":4, "LBP":5, "Harris":6, "Canny":6,
    "CNN":9, "GAN":5, "Selenium":9, "Scrapy":6, "BeautifulSoup":7, "NLTK":4, 
    "Spacy":5, "Pandas":8, "Seaborn":6, "Matplotlib":8,
    "Scikit-Learn":9, "Keras":8, "TensorFlow":8, "PyTorch":9, "PySpark":6, 
    "LangChain":8, "Git":7, "FastAPI":8, "Flask":6, "Docker":9, "Airflow":6, 
    "Jenkins":7, "AWS":7, "Kubernetes":4, "Nginx":6, "Problem-solving":7, 
    "Teamwork":8, "Communication":7
}

def function(train):   
    comment_words = ""
    for i in train:
        val = str(i)
        tokens = val.split()

        comment_words += " ".join(tokens)+" "
    return comment_words

def plot_wordcloud(train):    
    # Create a circular mask for the word cloud
    x, y = np.ogrid[:1600, :1600]  # Higher resolution for mask (e.g., 1600x1600 instead of 800x800)
    mask = (x - 800) ** 2 + (y - 800) ** 2 > 700 ** 2  # Adjusted radius for the higher resolution
    mask = 255 * mask.astype(int)

    wordcloud = WordCloud(
        background_color='#0A192F',  # Background color
        width=1600, height=1600,  # Higher resolution canvas
        mask=mask,  # Apply circular mask
        contour_color='#0A192F',  # White contour around the circle
        contour_width=1,  # Contour thickness
        color_func=lambda *args, **kwargs: "#FFD700",  # Set text color to white
        max_words=200,  # Maximum number of words
        collocations=False,  # Prevent splitting of phrases
        max_font_size=300,  # Higher maximum font size for better scaling in large image
        relative_scaling=0.5  # Improve word size distribution
    ).generate_from_frequencies(train)
    
    # Plot the word cloud
    plt.figure(figsize=(10, 10), dpi=300)  # High resolution and larger figure size
    plt.imshow(wordcloud, interpolation='bilinear')  # Smoother rendering with 'bilinear'
    plt.axis("off")  # Turn off axis
    plt.tight_layout(pad=0)
    
    # Save the word cloud with higher DPI (300 dpi) for better quality
    plt.savefig("assets/wordcloud_skills.png", dpi=300)

# Call the function to generate and save the word cloud
plot_wordcloud(skills)
