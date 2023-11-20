// import Notification from 'rc-notification';
import styled from 'styled-components';
import {
  colorAccent,
  colorBlackBackground,
  colorBlue,
  colorRed,
  colorWhite,
  colorYellow,
} from '@/styles/palette';

const notificationConfig = (theme: any, color:string, rtl: { direction: any; }, title: any, message: any) => {
  const notificationInitialProps = {
    content: <BasicNotification
      color={color}
      title={title}
      message={message}
      theme={theme}
    />,
    closable: true,
    duration: 5,
    style: { top: 0, left: 'calc(100vw - 100%)' },
    className: `right-up ${rtl.direction}-support`,
  };
  return notificationInitialProps;
};

type BasicNotificationProps = {
  theme: any;
  color?: string;
  title?: string;
  message: string;
};

const BasicNotification: React.FC<BasicNotificationProps> = ({
  color = '', title = '', message, theme,
}) => (
  <NotificationContent color={color} theme={theme.className}>
    <NotificationMessageWrap>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationMessageWrap>
  </NotificationContent>
);

type FullWideNotificationProps = {
  color?: string;
  message: string;
};

const FullWideNotification: React.FC<FullWideNotificationProps> = ({ color = '', message }) => (
  <NotificationContent fullWidth color={color}>
    <NotificationMessage>{message}</NotificationMessage>
  </NotificationContent>
);

export {
  BasicNotification,
  FullWideNotification,
  // showNotification,
  notificationConfig
};

// region STYLES

const NotificationMessage = styled.p`
  margin-top: 0;
  font-size: 12px;
`;

const NotificationTitle = styled.h5`
  margin-bottom: 8px;
  font-weight: 700;
`;


const getColor = (color: string) => {
  switch (color) {
    case 'light':
      return colorWhite;
    case 'dark':
      return colorBlackBackground;
    case 'primary':
      return colorBlue;
    case 'success':
      return colorAccent;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
      
    default:
      return colorWhite;
  }
};

const NotificationMessageWrap = styled.div`
  padding: 20px 40px 20px 25px;
`;

const NotificationContent = styled.div<{
  fullWidth?: boolean;
  theme: string;
  color: string;
}>`
  max-width: 400px;
  width: calc(100% - 50px);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
  background: ${props => getColor(props.color || props.theme)};
  position: relative;
  margin: 10px 25px;
  display: flex;

  ${props => props.fullWidth && `
    max-width: 100vw;
    width: 100vw;
    margin: 0;
    padding: 20px 40px 20px 25px;

    ${NotificationMessage} {
      text-align: center;
      width: calc(100% - 30px);
    }
  `}

  ${props => (props.color || props.theme === 'dark') && `
    ${NotificationMessage}, ${NotificationTitle} {
      color: ${colorWhite};
    }
  `}
`;

// endregion
