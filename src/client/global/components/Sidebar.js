import React from "react";
import { Link } from "react-router-dom";

export default ({ onSetSidebarOpen }) => {
    return (
        <div className="w-full h-full text-white bg-purple text-2xl">
            <button onClick={() => onSetSidebarOpen(false)}>close</button>
            <ul className="list-reset p-8">
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="about"
                        className="text-white"
                    >
                        About
                    </Link>
                </li>
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="legal-solutions"
                        className="text-white"
                    >
                        Legal Solutions
                    </Link>
                </li>
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="outsourcing"
                        className="text-white"
                    >
                        Outsourcing
                    </Link>
                </li>
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="team"
                        className="text-white"
                    >
                        Team
                    </Link>
                </li>
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="associations"
                        className="text-white"
                    >
                        Associations
                    </Link>
                </li>
                <li className="pb-8">
                    <Link
                        onClick={() => onSetSidebarOpen(false)}
                        to="contact"
                        className="text-white"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};
