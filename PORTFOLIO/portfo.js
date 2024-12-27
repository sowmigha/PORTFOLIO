function showDetails(projectId) {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modalText");

    if (projectId === 'project1') {
        modalText.innerHTML = "In this project, I developed an Intelligent Virtual Assistant (IVA) capable of understanding and responding to user queries in natural language. The IVA leverages advanced Natural Language Processing (NLP) techniques and machine learning algorithms to provide accurate and contextual responses, making it an effective tool for customer support and personal assistance.<br><br>Key Features:<br><b>Natural Language Understanding (NLU):</b> Implemented an NLU model that processes and interprets user inputs to understand the intent and entities mentioned in the queries.<br>              <b>Context Management: </b>Designed a context management system to maintain the context of ongoing conversations, allowing the IVA to handle multi-turn dialogues seamlessly.<br><b>Response Generation:</b> Integrated a response generation module that formulates coherent and relevant replies based on the interpreted user intent and context.<br><B>Machine Learning Models:</B> Utilized supervised learning techniques to train classification models for intent detection and entity recognition.<br><b>Integration with APIs:</b> Enabled the IVA to fetch real-time information from various APIs, such as weather updates, news, and calendar events.<br><b>User Personalization:</b> Developed user profile management features to personalize responses based";
    } else if (projectId === 'project2') {
        modalText.innerHTML = "<ul> <li><strong>Data Collection and Preprocessing:</strong> Collected a large dataset of facial images from diverse sources.<em>Preprocessed the images to standardize resolution and remove noise</em>, ensuring high-quality input for the model.</li> <li><strong>Model Training:</strong>Designed and trained a deep learning model using CNNs. The model architecture included multiple convolutional layers to extract facial features, followed by fully connected layers for classification.</li><li><strong>Face Detection:</strong> Integrated a face detection algorithm to identify and locate faces within images and video frames before passing them to the recognition model.</li> <li><strong>Real-Time Recognition:</strong> Implemented the system to work in real-time, enabling it to process video feeds and instantly recognize individuals with high accuracy.</li> <li><strong>Performance Evaluation:</strong> Evaluated the model’s performance using metrics such as <em>accuracy, precision, recall, and F1-score</em>. Achieved high accuracy and robust performance across various lighting conditions and backgrounds.</li><li><strong>Deployment:</strong> Deployed the system using a web-based interface, allowing users to upload images or use their webcam for real-time facial recognition.</li></ul> ";
    } else if (projectId === 'project3') {
        modalText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I developed an innovative Handwritten Digit Recognition system that effectively identifies and classifies handwritten digits from images. This project utilizes the power of Convolutional Neural Networks (CNNs) and was trained on the MNIST dataset, comprising 60,000 training images and 10,000 test images.<br>Key Features:<br><br>Data Preprocessing: Enhanced input data quality through normalization and noise reduction techniques.<br>Model Architecture: Created an optimized CNN model with multiple convolutional and pooling layers to accurately extract features from handwritten digits.<br>Training and Validation: Implemented data augmentation and dropout methods to prevent overfitting, achieving impressive accuracy on validation sets.<br>Performance Evaluation: Measured model performance using metrics such as accuracy, precision, recall, and F1-score.<br>Deployment: Built a user-friendly interface that allows users to upload images of handwritten digits and receive real-time predictions.<br>Technologies Used:<br><ul><li>Python</li><li>TensorFlow/Keras</li><li>OpenCV</li><li>NumPy</li><li>Matplotlib</li></ul>";
    }

    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent!");
});
