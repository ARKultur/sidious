import { Container } from "@material-ui/core";
import { Button } from "@mui/material";

export const AdminSideBar = () => {
  const Options = ["Users", "Organizations", "NewsLetter", "Contact"];

  return (
    <div style={{ backgroundColor: "white", width: "100%", height: "100%", justifyContent: "center" }}>
        <div className="side_bar_title_section">
          <p>Administration</p>
        </div>
       
        <div className="side_bar_footer">
          <p>@Administration Arkultur</p>
        </div>
    </div>
  );
};
