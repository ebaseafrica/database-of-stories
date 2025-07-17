
document.getElementById("story-form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("submission-feedback").style.display = "block";
  // Add submission to a simulated story feed
  const title = event.target.title.value;
  const author = event.target.author.value;
  const region = event.target.region.value;
  const content = event.target.content.value;

  const storyBlock = document.createElement("div");
  storyBlock.innerHTML = `<h3>${title}</h3><p><strong>By:</strong> ${author}</p><p><strong>Region:</strong> ${region}</p><p>${content}</p>`;
  document.getElementById("stories-container").appendChild(storyBlock);

  event.target.reset();
});

document.getElementById("language-switcher").addEventListener("change", function(event) {
  alert("Language switched to: " + event.target.value + " (Only English supported now.)");
});
