import React from "react"
import styled from 'styled-components';

const PortfolioPage = ({ children }) => {
  return (
    <PortfolioPageWrapper>
      {children}
    </PortfolioPageWrapper>
  );
};

const PortfolioPageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;

.nav-links {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.section-title {
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .063em;
  font-size: 1rem;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--hr);
  color: #919191;
}

h4 {
  margin-bottom: 16px;
}

.about-wrapper {
  padding: 24px 0;

  @media (min-width: 768px) {
    padding: 24px 0 0;
  }

  p {
    opacity: .85;
    margin-bottom: 16px;
  }
}

.grid {
  width: 100%;
  --mediaStart: 11;
  --mediaEnd: end;
  --textStart: wrapper-start;
  --textSpan: 7;
  --headingSpan: wrapper-end;
  --textStart: 1;
  
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: [start] minmax(0, 1fr) [wrapper-start] repeat(16, minmax(0, 40px)) [wrapper-end] minmax(40px, 1fr) [end];
    margin: 0 auto;
    padding: 60px 0;
  }

  &-left {
    --mediaStart: start;
    --mediaEnd: 10;
    --textStart: 11;
  }

  &-media {
    position: relative;
    grid-column: var(--mediaStart, wrapper-start)/var(--mediaEnd, 10);
    grid-row: 1;
    line-height: 0;

    .platform-img {
      width: 100%;
      
      @media (min-width: 768px) {
        width: 350px;
      }
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  &-details {
    @media (min-width: 1440px) {
      --textSpan: 16;
    }

    @media (min-width: 1600px) {
      --textSpan: 20;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    grid-column: var(--textStart, 11)/span var(--textSpan, 7);
    grid-row: 1;
    justify-content: center;
    padding: 24px 0;

    @media (min-width: 768px) {
      padding: 0;
    }

    p {
      margin-bottom: 20px;
    }

    .heading-title {
      color: var(--title);
      font-weight: 500;
    }

    h3 {
      font-size: 28px;
      line-height: 1.2;
      margin-bottom: 20px;
      font-weight: 600;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    .list {
      &:last-child {
        margin-top: 24px;
      }

      ul {
        li {
          position: relative;
          padding: 16px 0 0 calc(16px * 2);
          display: flex;
          align-items: center;

          &:first-child {
            padding: 0 0 0 calc(16px * 2);
          }

          svg {
            position: absolute;
            top: var(--spacer);
            left: 0;
            color: var(--primary);
          }
        }
      }
    }
  }
}

.link-back,
.link-forward  {
  margin-top: 100px;
  text-decoration: none;
  color: var(--text);
  display: flex;
  transition: .2s;

  &:hover {
    color: var(--primary);
  }

  svg {
    align-self: center;
    color: var(--primary);
  }
}

.link-back svg {
  margin-right: 10px;
}

.link-forward svg {
  margin-left: 10px;
}

.link-more {
  display: inline-block;
  color: var(--title);
  font-size: 1em;
  font-weight: 500;
  font-style: italic;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  margin: 0 0 20px;

  &:hover {
  color: var(--textHover);
  
    > .arrow.-left {
      > .shaft {
        width: 45px;
        transition-delay: 0.1s;
        background-color: var(--primary);

        &:before,
        &:after {
          width: 8px;
          transition-delay: 0.1s;
          background-color: var(--primary);
        }

        &:before {
          transform: rotate(40deg);
        }

        &:after {
          transform: rotate(-40deg);
        }
      }
    }
    
    > .main {
      transform: translateX(80px);
      
      > .arrow.-right {
        > .shaft {
          width: 0;
          transform: translateX(200%);
          transition-delay: 0;
          
          &:before,
          &:after {
            width: 0;
            transition-delay: 0;
            transition: all 0.1s;
          }

          &:before {
            transform: rotate(0);
          }

          &:after {
            transform: rotate(0);
          }
        }
      }
    }
  }

  .arrow {
    width: 45px;
    transition: all 0.2s;

    > .shaft {
      background-color: var(--primary);
      display: block;
      height: 1px;
      position: relative;
      transition: all 0.2s;
      transition-delay: 0;
      will-change: transform;

      &:after,
      &:before {
        background-color: var(--primary);
        content: "";
        display: block;
        height: 1px;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.2s;
        transition-delay: 0;
      }

      &:before {
        transform-origin: top right;
      }

      &:after {
        transform-origin: bottom right;
      }
    }

    &.-left {
      position: absolute;
      top: 50%;
      left: 0;

      > .shaft {
        width: 0;
        background-color: var(--primary);
        
        &:before,
        &:after {
          width: 0;
          background-color: var(--primary);
        }

        &:before {
          transform: rotate(0);
        }

        &:after {
          transform: rotate(0);
        }
      }
    }

    &.-right {      
      > .shaft {
        width: 45px;
        transition-delay: 0.2s;

        &:before,
        &:after { 
          width: 8px;
          transition-delay: 0.3s;
          transition: all 0.5s;
        }
        
        &:before {
          transform: rotate(40deg);
        }
        
        &:after {
          transform: rotate(-40deg);
        }
      }
    }
  }
  > .main {
      display: flex;
      align-items: center;
      transition: all 0.2s;
      
      > .arrow-label {
        margin: 0 16px 0 0;
      }
      
      > .arrow {
        position: relative;
      }
    }
}

.banner-wrapper {
  padding-top: 32px;
  width: 100%;

  .banner-img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 768px) {
  [data-sal-mobile] {
    animation-name: none !important;
  }
}

`;

export default PortfolioPage;