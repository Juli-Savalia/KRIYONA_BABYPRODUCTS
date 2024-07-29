import $ from "jquery"

$('.offcanvas-body ul li').on('click', function() {
    console.log('Clicked on:', $(this));
    $(this).toggleClass('active');
});

//image size
// const imageInput = document.getElementById('imageInput');

// imageInput.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   const fileSize = file.size;
//   const fileType = file.type;

//   // Set the maximum file size limit (e.g., 2MB)
//   const maxSize = 2 * 1024 * 1024;

//   if (fileSize > maxSize) {
//     alert('Image size exceeds the limit of 2MB');
//     e.target.value = ''; // Reset the input field
//   } else if (!fileType.startsWith('image/')) {
//     alert('Only image files are allowed');
//     e.target.value = ''; // Reset the input field
//   }
// });