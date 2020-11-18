const themeColor = (key, props, index) => {
  return index >= 0 ? props.theme[key][index] : props.theme[key];
};

const buttonSolidBuilder = (key, index) => props => (`
    background: ${themeColor(key, props, index)};
    border: 1px solid ${themeColor(key, props, index)};
    color: #fff;

    &:hover {
        background: ${themeColor(key, props, index)};
        border: 1px solid ${themeColor(key, props, index)};
    }

    &.ant-btn-clicked::after {
        animation: none;
    }
`);

const buttonGhostBuilder = (key, index) => props => (`
    background: transparent;
    border: 1px solid ${themeColor(key, props, index)};
    color: ${themeColor(key, props, index)};

    &:hover {
        background: transparent;
        border: 1px solid ${themeColor(key, props, index)};
    }

    &.ant-btn-clicked::after {
        animation: none;
    }
`);

const buttonDefaultBuilder = props => (`
    background: #fff;
    border: 1px solid ${themeColor('default', props, 1)};
    color: ${themeColor('default', props, 0)};

    &:hover {
        background: #fff;
        border: 1px solid ${themeColor('default', props, 1)};
    }

    &.ant-btn-clicked::after {
        animation: none;
    }
`);


export default {
  buttonDefaultBuilder,
  buttonGhostBuilder,
  buttonSolidBuilder
};
