import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListViewTD(props) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={props.title}
                    secondary={
                        <React.Fragment>
                            
                            {props.desc}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

        </>

    );
}