import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBar: {
    backgroundColor: 'rgb(255, 200, 48)',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },

  heading: {
    marginLeft: '20px',
    marginTop: '13px',
    fontSize: '50px'
  },

  image: {
    marginLeft: '15px',
  },
}));

