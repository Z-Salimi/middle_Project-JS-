import Toastify from 'toastify-js';

export const toast = (text , mode = "error")=>{
    Toastify({
        text,
        duration: 3000,
        close: true,
        position: "right",
        style: {
          background: mode === "success" ? "green" : "brown",
          fontSize : "16px",
          fontWeight : "500",
          borderRadius: "10px",
        }
      }).showToast();
};