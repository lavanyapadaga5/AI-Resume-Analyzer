function analyzeResume() {
    let resumeText = document.getElementById("resumeText").value;
    
    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"resume_text": resumeText})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = JSON.stringify(data.analysis, null, 2);
    });
}
