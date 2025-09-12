export function validateContact({ name, email, message }) {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = "Please enter your name";
  if (!email || !/^\S+@\S+\.\S+$/.test(email))
    errors.email = "Please enter a valid email";
  if (!message || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}
