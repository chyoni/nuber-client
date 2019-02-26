import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.greyColor};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 300;
  }
`;

interface IProps {
  placeholder? : string;
  type?:string;
  required?: boolean;
  name?:string;
  value: any;
  onChange:any;
  className?:string;
}

const Input :React.SFC<IProps> = ({className, placeholder = "", type="text", required= true, value, name="", onChange}) => (
  <Container 
      className={className}
      type={type} 
      name={name} 
      required={required} 
      value={value} 
      placeholder={placeholder} 
      onChange={onChange}
      />
);

export default Input;