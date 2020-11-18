import styled, { css } from 'styled-components';
import utils from './StyleUtils';

const ButtonStyleWrapper = (Component) => styled(Component)`
  ${(props) => {
    const {
      block,
      theme: { primary, gradient, gray }
    } = props;

    const validColorPrimary = `
      background: ${primary[0]};
      border: 1px solid ${primary[0]};
      background-image: ${gradient ? `linear-gradient(to right, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})` : ''};
      `;

    const validColorDefault = `
      border: 1px solid ${primary[0]};
      `;

    return css`
      height: 3.5rem;

      &.ant-btn > span + *,
      &.ant-btn > * + span {
        margin-left: 1rem !important;
      }

      &.ant-btn-default {
        ${utils.buttonDefaultBuilder}
      }

      &.ant-btn-primary {
        ${gradient ? validColorPrimary : utils.buttonSolidBuilder('primary', 0)}
      }

      &.ant-btn-default {
        ${gradient ? validColorDefault : null}
      }

      &.ant-btn-success {
        ${utils.buttonSolidBuilder('success', 0)}
      }

      &.ant-btn-ghost-success {
        ${utils.buttonGhostBuilder('success', 0)}
      }

      &.ant-btn-danger {
        ${utils.buttonSolidBuilder('danger', 0)}
      }

      &.ant-btn-ghost-danger {
        ${utils.buttonGhostBuilder('danger', 0)}
      }

      &.ant-btn-warning {
        ${utils.buttonSolidBuilder('warning', 0)}
      }

      &.ant-btn-ghost-warning {
        ${utils.buttonGhostBuilder('warning', 0)}
      }

      &.ant-btn-ghost {
        ${utils.buttonGhostBuilder('primary', 0)}
      }

      ${block ? 'width: 100%' : ''};

      &.ant-btn.disabled,
      &.ant-btn[disabled],
      &.ant-btn.disabled:hover,
      &.ant-btn[disabled]:hover,
      &.ant-btn.disabled:focus,
      &.ant-btn[disabled]:focus,
      &.ant-btn.disabled:active,
      &.ant-btn[disabled]:active,
      &.ant-btn.disabled.active,
      &.ant-btn[disabled].active {
        color: rgba(0, 0, 0, 0.25);
        background: ${gray[5]};
        border-color: #d9d9d9;
      }
    `;
  }}
  `;

export default ButtonStyleWrapper;
