//create a new pet 
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#pet-name').value.trim();
    const species = document.querySelector('#pet-species').value.trim();
    const breed = document.querySelector('#pet-breed').value.trim();
  
    if (name && species && breed) {
      const response = await fetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify({ name, species, breed }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to post your pet.');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/pets/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete pet');
      }
    }
  };
  
  document
    .querySelector('.new-pet-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  