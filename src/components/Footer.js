/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Link from "@material-ui/core/Link";
import { Chip, Avatar, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton, Tooltip, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { getTranslations as t } from "../../locales";
let QRCode = require("qrcode.react");

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
  },

  footer: {
    textAlign: "center",
    color: theme.palette.diamondBlack.main,
    padding: theme.spacing(3, 2),
  },

  topScrollPaper: {
    alignItems: "start",
    marginTop: "10vh",
  },
  topPaperScrollBody: {
    verticalAlign: "middle",
  },

  chip: {
    marginTop: 5,
    border: "none",
    borderRadius: 8,
    textTransform: "none",
    boxShadow: "none",
    color: theme.palette.diamondBlack.main,
    backgroundColor: theme.palette.alto.light,
    "&:hover": {
      backgroundColor: theme.palette.alto.main,
    },
    "&:focus": {
      backgroundColor: theme.palette.alto.main,
      boxShadow: "none",
    },
    transition: "background-color 0.2s ease-out",
    transition: "color .01s",
  },

  monIcon: {
    color: theme.palette.mountainMist.main,
  },

  qr: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
    marginBottom: 20,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`donation-tabpanel-${index}`}
      aria-labelledby={`donation-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
};

export default function Footer() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [currAvatar, setCurrAvatar] = useState("xmr");
  const [donateDialog, setDonateDialog] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const cryptoAddrs = [
    {
      type: "monero",
      alt: "xmr",
      addr: "84zQq4Xt7sq8cmGryuvWsXFMDvBvHjWjnMQXZWQQRXjB1TgoZWS9zBdNcYL7CRbQBqcDdxr4RtcvCgApmQcU6SemVXd7RuG",
    },
    {
      type: "bitcoin",
      alt: "btc",
      addr: "bc1qlfnq8nu2k84h3jth7a27khaq0p2l2gvtyl2dv6",
    },
    {
      type: "ethereum",
      alt: "eth",
      addr: "0xF6F204B044CC73Fa90d7A7e4C5EC2947b83b917e",
    },
  ];

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackOpen(false);
    handleSnackOpen();
  };

  const handleSnackOpen = () => {
    setTimeout(function () {
      setSnackOpen(true);
    }, 60000);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClickOpen = () => {
    setDonateDialog(true);
  };

  const handleClose = () => {
    setDonateDialog(false);
  };

  useEffect(() => {
    handleSnackOpen();

    setInterval(() => {
      setCurrAvatar(
        cryptoAddrs[Math.floor(Math.random() * cryptoAddrs.length)].alt
      );
    }, 10000);
  }, []);

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Built and developed by{" "}
            <Link
              href="https://github.com/darkkD11/File_encrypti_decrypt"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              {"B.E Student of Theem COE"}
            </Link>
          </Typography>

        </Container>
      </footer>
    </div>
  );
}
