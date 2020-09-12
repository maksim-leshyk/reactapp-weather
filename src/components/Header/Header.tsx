import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as appActions } from "../../redux/actions/app-actions";
import { getVisuallyImpaired } from "../../redux/selectors/app-selectors";
import {
  AppBar,
  IconButton,
  Typography,
  Tooltip,
  Toolbar,
} from "@material-ui/core";
import {
  Cloud as CloudIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";

enum VisibilityIconStatus {
  ACTIVE = "inherit",
  INACTIVE = "disabled",
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isVisuallyImpaired: boolean = useSelector(getVisuallyImpaired);

  return (
    <AppBar position="relative">
      <Toolbar>
        <CloudIcon className="logo-icon" />
        <Typography variant="h6" noWrap>
          Weather Plus
        </Typography>
        <div className="grow" />
        <Tooltip title="Visually impaired version">
          <IconButton
            color="inherit"
            onClick={() => dispatch(appActions.toggleVisuallyImpaired())}
          >
            <VisibilityIcon
              color={
                isVisuallyImpaired
                  ? VisibilityIconStatus.INACTIVE
                  : VisibilityIconStatus.ACTIVE
              }
            />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
