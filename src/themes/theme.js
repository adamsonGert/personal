const Theme = {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "900px",
      xl: "1200px",
      xxl: "1400px",
    },
  };
    const light = {
      colors: {
        background: "var(--white)",
        text: "var(--background)",
        textHover: "var(--primaryDark)",
        title: "var(--primaryDark)",
        button: "var(--grayLight)",
        buttonText: "var(--grayDark)",
        buttonLine: "var(--black)",
        navbar: "var(--white)",
        image: "invert(1) hue-rotate(180deg)",
        formInput: "var(--grayLight)",
        formBorder: "var(--grayLight)",
        hr: "var(--grayLight)" 
      },
    };
    
    const dark = {
      colors: {
        background: "var(--background)",
        text: "var(--white)",
        textHover: "var(--primary)",
        title: "var(--primary)",
        button: "var(--gray)",
        buttonText: "var(--white)",
        buttonLine: "var(--white)",
        navbar: "var(--navbarDark)",
        image: "invert(0) hue-rotate(180deg)",
        formInput: "var(--blueDarker)",
        formBorder: "var(--blueDark)",
        hr: "var(--grayDark)"
      },
    };
  
  export const lightTheme = { ...Theme, ...light };
  export const darkTheme = { ...Theme, ...dark };
  
  
