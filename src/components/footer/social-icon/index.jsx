import React from "react";

import "./style.scss";
// this page will be responsible for
// showing social icon, color and link
const SocialIcon = ({ icon, color, link }) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: color }}
            onClick={() => {
                /* this is for opening link in new page */
                window.open(link, "_blank");
            }}
        >
            {icon}
        </div>
    );
};

export default SocialIcon;
