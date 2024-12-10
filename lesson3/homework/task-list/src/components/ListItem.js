import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

export default function TaskList({ newDate, newTime, newTask, onDelete }) {
    return (
        <Box sx={{ width: '100vw',  display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`${newDate} ${newTime} ${newTask}`} />
                            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton>
                        <Divider style={{color: 'black'}}/>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}

TaskList.propTypes = {
    newDate: PropTypes.string.isRequired,  
    newTime: PropTypes.string.isRequired,  
    newTask: PropTypes.string.isRequired,   
    onDelete: PropTypes.func.isRequired,    
};
