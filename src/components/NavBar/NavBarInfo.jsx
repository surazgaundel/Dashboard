import React from 'react'
import { Link } from "react-router-dom";

import { navBarLinks } from "../../utils/navBarLinks";

export default function NavBarInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:mr-5 rounded-full">
            {navBarLinks.map((navLink) => {
            const { id, name, icon, image, updates } = navLink;
            return (
                <section key={id} className="sm:bg-lightGray sm:hover:bg-slate-600 hover:text-lightBlue rounded-full relative">
                <Link to={name}>
                    {icon ? (
                    <span className="flex items-center blur-bg p-2">{icon}</span>
                    ) : (
                    <img
                        src={image}
                        alt="logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full"
                    />
                    )}
                </Link>
                {updates > 0 ? (
                    <span className="absolute light-blue h-2 w-2 top-2 left-5 rounded-full" />
                ) : null}
                </section>
            );
            })}
        </div>
  )
}
