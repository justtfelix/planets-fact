export interface Theme {
  colors: {
    white: string;
    black: string;
    arsenic: string;
    gray: string;
    yellow: string;
    purple: string;
    red: string;
    orange: string;
    blue: string;
    darkBlue: string;
    lightBlue: string;
    lightOrange: string;
    lightGreen: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    arsenic: "#38384F",
    gray: "#838391",
    yellow: "#EDA249",
    purple: "#6f2ed6",
    red: "#D83A34",
    orange: "#D14C32",
    blue: "#2d68f0",
    darkBlue: "#070724",
    lightBlue: "#419EBB",
    lightOrange: "#CD5120",
    lightGreen: "#1ec2a4",
  }
}