import { toast } from 'react-toastify';




export let authMessageCreator = auth => {
    switch (auth) {
        case 400:
            return "Validation error";
        case 401:
            return "Your token outdated";
        case 403:
            return "Provided password is incorrect";
        case 404:
            return "User with such email not found";
        case 409:
            return "User with such email already exists";
            default:
                return 
        }
}

export const transactionMessageCreator = error => {
    switch (error) {
        case 400:
            return "Validation error";
        case 401:
            return "Your token outdated";
        case 403:
            return "User does not owns transaction";
        case 404:
            return "Transaction category not found";
        case 409:
            return "Transaction category type does not match transaction type";
            default:
                return 
        }
}

export const notify = (message) => {
    return toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
 

    


