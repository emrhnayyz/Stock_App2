import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required(),

  email: string().email().required(),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password2: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm password zorunludur!"),
});

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div>
      <Form>
                <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                  <TextField
                    id="username"
                    label="User Name"
                    type="text"
                    variant="outlined"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.username && errors.username} //In the example code above, "touched.username" checks if the "username" field has been touched. If this field is touched and also has the value "errors.username" i.e. there is an error for this field then this is used to display the error message.
                  />
                  {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}
                  <TextField
                    id="first_name"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="last_name"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password2"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <Button type="submit" variant="contained" size="large">Submit</Button>
                </Box>
              </Form>
    </div>
  );
};

export default SignUpForm;
