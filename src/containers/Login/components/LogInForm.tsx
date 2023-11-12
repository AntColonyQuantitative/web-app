import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';
import {
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { AccountButton, AccountForgotPassword, LoginForm } from '@/shared/components/account/AccountElements';

type LogInFormProps = {
  onSubmit: (values: { name: string, password: string, remember_me: boolean }) => void;
};

const LogInForm = ({ onSubmit }:LogInFormProps) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <LoginForm onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroupLabel>Username</FormGroupLabel>
          <FormGroupField>
            <FormGroupIcon>
              <AccountOutlineIcon />
            </FormGroupIcon>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupLabel>Password</FormGroupLabel>
          <FormGroupField>
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              className="input-without-border-radius"
              keyIcon
            />
            <AccountForgotPassword>
              <NavLink to="/">Forgot a password?</NavLink>
            </AccountForgotPassword>
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupField>
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
              type="checkbox"
            />
          </FormGroupField>
        </FormGroup>
        {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <AccountButton
          as={NavLink}
          variant="primary"
          to="/pages/one"
        >
          Sign In
        </AccountButton>
        <AccountButton
          as={NavLink}
          variant="outline-primary"
          to="/pages/exchange"
        >
          Create Account
        </AccountButton>
      </LoginForm>
    )}
  </Form>
);

export default LogInForm;
