import {
  alpha,
  AppBar,
  Box,
  InputBase,
  styled,
  TextField,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

export const SearchBar = (props) => {
  //   const styles = useStyles();

  const [findData, setFindData] = useState("");

  const handleChange = (e) => {
    setFindData(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (data) => {
    var findDataFilter = props.products.filter((e) => {
      if (e.name.toString().toLowerCase().includes(data.toLowerCase())) {
        console.log(e);
        return e;
      }
    });
    props.setProduct(findDataFilter);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolBar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={findData}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
            </Search>
          </StyledToolBar>
        </AppBar>
      </Box>
    </div>
  );
};
