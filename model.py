from transformers import pipeline

# Load AI model (pre-trained Hugging Face NLP pipeline)
nlp_pipeline = pipeline("text-classification", model="distilbert-base-uncased")

def analyze_resume(text):
    analysis = nlp_pipeline(text)
    return analysis
