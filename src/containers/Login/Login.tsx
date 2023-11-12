import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import {
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountOr,
  AccountSocial,
  AccountSocialButtonFacebook,
  AccountSocialButtonGoogle,
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import LogInForm from './components/LogInForm';

const Login = () => (
  <AccountWrap>
    <AccountContent>
      <AccountCard>
        <AccountHead>
          <AccountTitle>Welcome to <br/>
            <AccountLogo>AntColony 
              <AccountLogoAccent> Quantitative</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Start your trading more easily</h4>
        </AccountHead>
        <LogInForm onSubmit={() => {}} />
        <AccountOr>
          <p>Or Easily Using</p>
        </AccountOr>
        <AccountSocial>
          {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
          <AccountSocialButtonFacebook
            as={Link}
            className="account__social-btn account__social-btn--facebook"
            to="/pages/exchange"
          >
            <FacebookIcon />
          </AccountSocialButtonFacebook>
          <AccountSocialButtonGoogle
            as={Link}
            to="/pages/exchange"
          >
            <GooglePlusIcon />
          </AccountSocialButtonGoogle>
        </AccountSocial>
      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default Login;
