import React, { useState } from 'react';
import styled from 'styled-components';

const Tooltips = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Tooltip onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (
        <div className={`tooltip-tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </Tooltip>
  )
}

const Tooltip = styled.div`
      display: inline-block;
      position: relative;

      .tooltip-tip {
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px;
        color: white;;
        background: #494A4B;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        line-height: 1;
        z-index: 100;
        white-space: nowrap;

        &:before {
          content: " ";
          left: 50%;
          border: solid transparent;
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-width: 6px;
          margin-left: calc(6px * -1);
        }
      }
      .top {
        top: calc(30px * -1);

      &:before {
        top: 100%;
        border-top-color: #494A4B;
      }
    }

    .right {
      left: calc(100% + 20px);
      top: 50%;
      transform: translateX(0) translateY(-50%);

      &:before {
        left: calc(6px * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: #494A4B;
      }
    }

    .bottom {
      bottom: calc(30px * -1);

      &:before {
        bottom: 100%;
        border-bottom-color: #494A4B;
      }
    }

    .left {
      left: auto;
      right: calc(100% + 30px);
      top: 50%;
      transform: translateX(0) translateY(-50%);

      &:before {
        left: auto;
        right: calc(6px * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: #494A4B;
      }
    }
`;

export default Tooltips;
