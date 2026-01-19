document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("feedback").value;

    let feedbackItem = document.createElement("div");
    feedbackItem.className = "feedback-item";

    feedbackItem.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Subject:</strong> ${subject}<br>
        <strong>Rating:</strong> ${rating}<br>
        <strong>Feedback:</strong> ${feedback}
    `;

    document.getElementById("feedbackList").appendChild(feedbackItem);

    document.getElementById("feedbackForm").reset();
});
