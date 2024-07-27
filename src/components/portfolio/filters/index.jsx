import React, { useState } from "react";

import "./style.scss";
import { click } from "@testing-library/user-event/dist/click";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };
    return (
        <ul className="filters-menu-items">
            {filtersData.map((item) => {
                return (
                    <li
                        key={item.id}
                        // here is tricky part for all element filter-menu-item as classname is assigned
                        // but it active class matches with item.id then in that case they have addition
                        // active className
                        className={`filter-menu-item ${
                            active === item.id ? "active" : ""
                        }`}
                        onClick={() => clickHandler(item.id)}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
