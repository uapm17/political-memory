import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ExternalLink = {
  url: string;
  icon: string | null;
  name: string;
};
