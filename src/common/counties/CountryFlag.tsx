import React from "react";
import { getFlagImgSrc } from "./flags";

type CountryFlagProps = {
  size?: number;
  code: string;
  className?: any;
};

const CountryFlag: React.FC<CountryFlagProps> = ({
  size = 48,
  code,
  className
}) => {
  return (
    <img
      style={{ width: size, height: size * 0.75 }}
      className={['rounded object-cover', className].join(' ')}
      key={code}
      src={getFlagImgSrc(code)}
      alt={code}
    />
  );
};

export default CountryFlag;
