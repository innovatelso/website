import React from "react";
import { Link } from "react-router-dom";

export default ({ onSetSidebarOpen }) => {
    return (
        <div className="flex w-full h-full text-white bg-purple text-2xl">
            <div className="flex-3">
                <ul className="list-reset p-8">
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="/"
                            className="text-white no-underline hover:underline"
                        >
                            About
                        </Link>
                    </li>
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="legal-solutions"
                            className="text-white no-underline hover:underline"
                        >
                            Legal Solutions
                        </Link>
                    </li>
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="outsourcing"
                            className="text-white no-underline hover:underline"
                        >
                            Outsourcing
                        </Link>
                    </li>
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="team"
                            className="text-white no-underline hover:underline"
                        >
                            Team
                        </Link>
                    </li>
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="associations"
                            className="text-white no-underline hover:underline"
                        >
                            Associations
                        </Link>
                    </li>
                    <li className="pb-8">
                        <Link
                            onClick={() => onSetSidebarOpen(false)}
                            to="contact"
                            className="text-white no-underline hover:underline"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8 text-right">
                <button onClick={() => onSetSidebarOpen(false)}>close</button>
            </div>
        </div>
    );
};
