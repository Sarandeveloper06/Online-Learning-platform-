document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const receipt = document.getElementById('receipt');
  const adminForm = document.getElementById('adminForm');
  const courseList = document.getElementById('courseList');

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      receipt.textContent = 'Payment successful! Receipt: ₹6000 paid.';
    });
  }

  if (adminForm) {
    adminForm.addEventListener('submit', e => {
      e.preventDefault();
      const courseName = adminForm.querySelector('input').value;
      const li = document.createElement('li');
      li.textContent = courseName;
      courseList.appendChild(li);
      adminForm.reset();
    });
  }
});