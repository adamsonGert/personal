import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    

    :root {
        --background: white;
        --navbar: white;
        --text: #010c17;
        --textHover: rgb(224, 178, 59, .5);
        --primary: rgb(224, 178, 59);
        --title: rgb(224, 178, 59);
        --button: #ebeff2;
        --buttonText: #3e424c;
        --buttonLine: #000;
        --navbar: white;
        --image: invert(1) hue-rotate(180deg);
        --formInput: #ebeff2;
        --formBorder: #ebeff2;
        --hr: #ebeff2;
    }

    /* Dark Mode */
    :root.dark {
        --background: #010c17;
        --navbar: rgba(1, 12, 23, .9);
        --text: white;
        --textHover: rgb(235, 200, 110, .5);
        --primary: rgb(235, 200, 110);
        --title: rgb(235, 200, 110);
        --button: #777d8e;
        --buttonText: white;
        --buttonLine: white;
        --image: invert(0) hue-rotate(180deg);
        --formInput: #021527;
        --formBorder: #02192f;
        --hr: #3e424c; 
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        scroll-behavior: smooth;
        height: 100%;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    body {
        width:100%;
        background: var(--background);
        color: var(--text);
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        display: block;
        transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
        line-height: 1.5;


        &.no-scroll {
            overflow: hidden;

            .container {
                filter: blur(5px) brightness(0.7);
                transition: .25s;
                pointer-events: none;
                user-select: none;
            }
        }
    }

    h4 {
        font-size: 15px;
        font-weight: 600;
    }

    p {
        line-height: 1.7;
    }

`;

export default GlobalStyle;