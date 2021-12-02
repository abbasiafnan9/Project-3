import {  Box, InputBase, makeStyles } from '@material-ui/core';
import { Search as SearchIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        marginRight: theme.spacing(2),
        margin: '0 13px',
        width: '100%',
    },
    searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0),
        // vertical padding + font size from searchIcon
        paddingLeft: '65px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',

        }
    }

}))

const Search = ()=> {
    const classes = useStyles();
    return(
        <Box className={classes.search}>
            <Box className={classes.searchIcon}>
                <SearchIcon />
            </Box>
            <InputBase
            placeholder="Search.."
            classes={{
                root:classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search'}}
            />
        </Box>
    )
}

export default Search;