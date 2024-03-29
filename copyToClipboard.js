import { toast } from "react-toastify";

const copyToClipboard=(text)=>{
    navigator.clipboard.writeText(text);
    toast.success('🤖 Copied to clipboard!', {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export default copyToClipboard;