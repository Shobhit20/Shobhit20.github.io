

var modalInfo = {
    1: {
      title: "Large Financial Documents QA using LLMs",
      info: "Analyzing financial reports, which often span hundreds of pages, is a time-consuming process. Large Language Models \
      (LLMs) have improved the efficiency of Question Answering (QA) in such reports, but their context-length limitations pose \
      challenges, especially when dealing with long documents. Additionally, LLMs struggle to retrieve information from the middle \
      sections of really long context promopts. The MapReduce framework addresses this by dividing the PDF into smaller chunks, allowing efficient \
      processing in two phases. We enhanced this method with rank filtering to optimize LangChain MapReduce, and compared it to a \
      Retrieval Augmented Generation (RAG) system, our baseline for QA on the FinanceBench dataset. Unlike RAG, which relies on a \
      retriever module that impacts performance, MapReduce bypasses this, resulting in a 16% efficiency gain. We incorporated this \
      method into a GUI-based QA tool for PDF reports. Additionally, we created a dataset by scraping financial reports from all London \
      Stock Exchange (LSE) companies, providing a valuable resource for future research. Our framework enables financial experts to \
      analyze lengthy PDF documents more efficiently.",
      link: "assets/poster.pdf",
      github: "#"
    },
    2: {
      title: "X-ray Image denoising using U-Net",
      info: "Medical imaging as a field has gained significant traction in recent times due to its applications, \
            but one of the biggest problems that remain in these images is the aberrations that appear due to apparatus \
            limitations or other environmental factors. X-rays are also not immune to such imperfections, but getting rid \
            of this noise can result in efficient diagnostics, aiding the enhancement of image quality and accuracy in medical \
            assessments. Previous attempts at generating noisy datasets for X-rays make an assumption of a uniform scatter of noise \
            on the image. We induce an uneven scatter of noise in images, more towards the centre of the X-ray, where the interaction \
            of X-rays with tissues is greater. We train multiple incremental updates to our model on the NIH X-ray dataset after \
            inducing noise using the core concepts of encoder-decoder architecture. We also propose an end-to-end pipeline stacking \
            the two best-performing models. Despite training on a subset of only 10k images, the resultant de- noised images seem to\
             be promising. The objective evaluation of the model is carried out using the Mean Squared Error (MSE), the Structural \
             Similarity Index (SSIM), and the Peak Signal-to- Noise Ratio (PSNR).",
      link: "https://github.com/Shobhit20/MLP_Sem2/blob/main/MLP_Coursework_4_Report.pdf",
      github: "https://github.com/Shobhit20/MLP_Sem2/tree/main"
    },
    3: {
      title: "Neural Machine Translation (NMT)",
      info: "This project dealt with building a Neural Machine Translation model from scratch. The experiments started with implementing\
            an LSTM model with attention. Based on the drawbacks of the previous model, we incorporate a lexical decoding module which \
            The lexical model addresses this issue using a small feed-forward neural network(FFNN). The network takes a weighted average\
            of the source embeddings with respect to attention weights i.e. The output of the FFNN is combined with the decoder output. \
            The lexical model outperforms the baseline model comfortably in all evaluation metrics. In order to improve the metrics further \
            a Transformer model with Multi-headed attention module is implemented from scratch. The entire training is done using only 10k \
            sentences for German to English Translation. Transformers are usually data hungry and thus lexical model performs better than \
            the Transformer architecture but the training and loss curves indicate the ability that the Transformer architecture possess if \
            given large data to train on. The model reached a BLEU score of 13.5 on just 10k sentences and the attention plots show the capability\
            of attention mechanism.",
      link: "https://github.com/Shobhit20/NLU-CW2/blob/main/NLU___cw2.pdf",
      github: "https://github.com/Shobhit20/NLU-CW2"
    },
    4: {
      title: "Analysis of Classical and Deep models for Image Classification with perturbations",
      info: "This project investigates the performance of classical machine learning and deep learning models in \
            classifying images of sports balls, from 15 different categories. The dataset comprises over 9,000 images, \
            testing the models ability to distinguish similar objects under varying conditions. The classical approach combines \
            Scale-Invariant Feature Transform and Histogram of Oriented Gradients features to train Support Vector Machine (SVM) \
            models, while the deep learning approach utilizes a Convolutional Neural Network (CNN) based on the ResNet-18 architecture.\
            The study tries to contrast the models performance using metrics such as accuracy, and F1 scores, and confusion matrices. \
            We also analyze the robustness of our models by inducing image perturbations such as noise, blur, and occlusion. \
            While the classical approach provides insights into feature importance, the CNN model significantly outperforms the \
            SVM in terms of accuracy and robustness. This research contributes to the broader understanding of image classification techniques, \
            highlighting the advantages of deep learning models in handling complex, real-world data scenarios.",
      link: "https://github.com/Shobhit20/classical_and_deep_comparison/blob/main/IVC%20report.pdf",
      github: "https://github.com/Shobhit20/classical_and_deep_comparison"
    },
    5: {
      title: "Image Captioning",
      info: "In this project, the focus was on one of the visual recognition facets of computer vision, i.e image \
            captioning. The problem of generating language descriptions for visual data has been studied \
            from a long time but in the field of videos. In the recent few years emphasis has been lead on \
            still image description with natural text. Due to the recent advancements in the field of object \
            detection, the task of scene description in an image has become easier. \
            The aim of the project was to train convolutional neural networks with several hundreds of \
            hyperparameters and apply it on a huge dataset of images (Image-Net), and combine the results \
            of this image classifier with a recurrent neural network to generate a caption for the classified \
            image. In this report we present the detailed architecture of the model used by us. We achieved \
            a BLEU score of 56 on the Flickr8k dataset while the state of the art results rest at 66 on the \
            dataset",
      link: "https://github.com/Shobhit20/Image-Captioning/blob/master/Report/Image%20Captioning.pdf",
      github: "https://github.com/Shobhit20/Image-Captioning/tree/master"
    },
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("item");
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].getAttribute('id');
      openModal(btn[i]);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }