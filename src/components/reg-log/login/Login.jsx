import {Formik, Form, Field, ErrorMessage} from 'formik';
import Container from '../../common/container/Container';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
  const [ checked, setChecked ] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='login'>
     <Container>
      <h1>Login</h1>
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username */}
            <div className="username">
              <Field type="text" name="username" id='username' placeholder=" " required/>
              <label htmlFor='username'>Username</label>
              <ErrorMessage name="username" component="div" />
            </div>
            {/* Password */}
            <div className="password">
              <Field type={`${checked ? 'text' : 'password'}`}  name="password" id='password' placeholder=" " required/>
              <label htmlFor='password'>Password</label>
              <ErrorMessage name="password" component="div" />
            </div>
            {/* Verify Password */}
            <div className='check-password'>
              <Field type='checkbox' id='checkbox' checked={checked} onClick={() => {
                setChecked(!checked);
              }}/>
              <label htmlFor="checkbox">Show Password</label>
              <p>
                Dont have an account? 
                <a href="" onClick={() => navigate('/signup')}>Sign up</a>
              </p>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
     </Container>
    </div>
  )
}

export default Login
