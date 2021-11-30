import { Box, InputBase, makeStyles } from '@material-ui/core';
import { Search as SearchIcon} from '@material-ui/icons';

const useStyles = makeStyles({

})

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