import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "30px",
    boxShadow: "10px 10px 15px rgb(61, 58, 58)",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '8px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "black",
    backgroundColor: "rgb(255, 200, 48)",
    borderRadius: "25px",
  },
  buttonClear: {
    borderRadius: "20px",
  }
}));