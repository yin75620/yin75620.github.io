import React from "react";
import { LinkedIn } from "@material-ui/icons";
import "../Styles/Footers.css";

function Footers() {
    return (
        <div className="footer">
            <div className="socialMedia">
                
                <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/jeff-yin-b08591121/', '_blank')}>LinkedIn</LinkedIn>
                
            </div>

            <p>© 2023, JeffYin.com</p>
        </div>
    );
}

//<Instagram onClick={() => window.open('https://www.instagram.com/kaimin.chang0220', '_blank')}>Instagram</Instagram>
//<Twitter onClick={() => window.open('https://twitter.com/KMINGCHANG', '_blank')}>Twitter</Twitter>
export default Footers;