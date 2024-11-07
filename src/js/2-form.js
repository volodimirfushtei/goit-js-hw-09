const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const textareaInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.paddingTop = '48px';
form.style.width = '408px';
form.style.height = '296px';

emailInput.style.width = '360px';
emailInput.style.height = '40px';
emailInput.style.marginTop = '8px';
emailInput.style.marginBottom = '8px';
textareaInput.style.width = '360px';
textareaInput.style.height = '80px';
textareaInput.style.marginTop = '8px';

submitButton.style.width = '95px';
submitButton.style.height = '40px';
submitButton.style.background = '#4E75FF';
submitButton.style.cursor = 'pointer';
submitButton.style.color = '#ffffff';
submitButton.style.padding = '8px 16px';
submitButton.style.borderRadius = '8px';
submitButton.style.marginTop = '16px';
form.addEventListener('input', function (event) {
  if (
    event.target.tagName.toLowerCase() === 'input' ||
    event.target.tagName.toLowerCase() === 'textarea'
  ) {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    formData[inputName] = inputValue;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});
const savedFormData = localStorage.getItem(STORAGE_KEY);
if (savedFormData) {
  try {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value =
      parsedFormData.email !== undefined ? parsedFormData.email : '';
    textareaInput.value =
      parsedFormData.message !== undefined ? parsedFormData.message : '';
  } catch (error) {
    console.error('Error parsed:', error);
  }
}
form.addEventListener('submit', function (event) {
  const emailValue = emailInput.value.trim();
  const messageValue = textareaInput.value.trim();
  if (emailValue && messageValue) {
    console.log("Об'єкт formData:", formData);
    event.preventDefault();
  } else {
    alert('Fill please all fields');
    event.preventDefault();
  }
});
