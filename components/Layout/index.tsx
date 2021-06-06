import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { initGA, logPageView } from "../../utils/analytics";

declare global {
    interface Window {
        GA_INITIALIZED: boolean;
    }
}
export const Layout: React.FC = ({ children }) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }, []);

    return <>{children}</>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
