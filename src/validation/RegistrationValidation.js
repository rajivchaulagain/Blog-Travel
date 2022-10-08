import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        // .min(1, "Minimum 1 characters")
        .max(255, "Maximum 255 characters")
        .required("First Name is required"),
    lastName: Yup.string()
        // .min(1, "Minimum 1 characters")
        .max(255, "Maximum 255 characters")
        .required("Last Name is required"),
    email: Yup.string()
        .email("Wrong email format")
        .min(3, "Minimum 3 characters")
        .max(255, "Maximum 255 characters")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Minimum 8 characters")
        .max(255, "Maximum 255 characters")
        .required("Password is required")
});

const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
};

export { initialValues, registerSchema }