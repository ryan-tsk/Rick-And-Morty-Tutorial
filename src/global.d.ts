import 'react';

declare module "*.module.css";
declare module "*.module.scss";


declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: string;
    global?: boolean;
  }
}