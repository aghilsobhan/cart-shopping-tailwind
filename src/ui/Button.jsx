import {Link} from "react-router-dom"

function Button({children,disable,to,type,onclick}) {
   const base="bg-yellow-400 text-sm uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full          hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

    const styles={
    primary:base+' px-4 py-3 sm:px-6 sm:py-4',
    small:base+' py-2 px-4  sm:px-5 sm:py-2.5 text-xs',
    secondary:  "px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-stone-300 uppercase font-semibold text-stone-400 py-3 px-4 inline-block tracking-wide rounded-full  hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
   round:base+'py-1 px-2.5  md:px-3.5 md:py-2 text-sm'
};
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>
   if(onclick) return   <button disabled={disable} onClick={onclick} className={styles[type]}>
   {children}
</button>
    return (
        <button disabled={disable} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;