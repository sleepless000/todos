export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

// In a real app call an error logging service here
export function handleError(error) {
  console.error('API call failed. ' + error);
  throw error;
}
