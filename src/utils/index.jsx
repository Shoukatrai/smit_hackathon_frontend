import { Bounce, toast } from "react-toastify";
export const BASE_URL = "http://localhost:5000/api/"
export const toastAlert = (object) => {
    if (object.type === "success") {
        toast.success(object.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } else {
        toast.error(object.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}