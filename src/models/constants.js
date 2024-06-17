export const ADMIN = {
  username: import.meta.env.VITE_ADMIN_USERNAME, 
  password: import.meta.env.VITE_ADMIN_PASSWORD  
};

export const BASE_URL = import.meta.env.VITE_BASE_URL; 
export const USERS_URL = import.meta.env.VITE_USERS_URL; 

export const GITHUB_LINK = 'https://github.com/DanielYehezkely';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/daniel-yehezkely/';
export const GMAIL = 'kegezgaming@gmail.com';


export const GET_SHOES_ERROR = "Unable to fetch shoes details.";
export const GET_SHOE_ERROR = "Unable to fetch shoe details.";
export const POST_SHOE_ERROR = "Unable to add shoe.";
export const PUT_SHOE_ERROR = "Unable to update shoe.";
export const DELETE_SHOE_ERROR = "Unable to delete shoe.";
export const FORM_INPUTS_EMPTY = "All fields are required."