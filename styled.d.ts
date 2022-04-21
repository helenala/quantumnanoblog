// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primaryBase: string;
      primaryHover: string;
      neutralDark: string;
      neutralLight: string;
    };

    breakpoints: {
      tablet: string;
      laptop: string;
      desktop: string;
      desktopL: string;
    };

    margins: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
