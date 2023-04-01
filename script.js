// Add event listeners for like and comment buttons
var likeButtons = document.querySelectorAll('.post-actions button:first-child');
var commentButtons = document.querySelectorAll('.post-actions button:last-child');

for (var i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function() {
    alert('Liked!');
  });
}

for (var i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener('click', function() {
    alert('Commented!');
  });
}
