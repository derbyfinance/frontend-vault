import NavBar from './NavBar';

export default {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Connected = {
  args: {
    isConnected: true,
    open: false,
  },
};
export const UnConnected = {
  args: {
    isConnected: false,
    open: false,
  },
};
export const OpenModal = {
  args: {
    open: true,
    isConnected: false,
  },
};
export const CloseModal = {
  args: {
    open: false,
    isConnected: false,
  },
};
