import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
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
    password: "",
};

export { initialValues, loginSchema }