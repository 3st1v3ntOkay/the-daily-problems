import React from 'react'

//! type ButtonOrLinkProps = 
//!   | React.ButtonHTMLAttributes<HTMLButtonElement>
//!   | React.AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonOrLinkProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button"
  })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a"
  })

const ButtonOrLink = (props: ButtonOrLinkProps) => {
  //! if ("href" in props) {
  //!   return <a {...props} />
  //! }
  
  if (props.as === "a") {
    return <a {...props} />
  }

  return <button {...props} />
}