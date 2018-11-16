import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// class AppHeader extends Component {

//     render(){
//         return (
//             <AppBar position="static">
//               <Toolbar>
//                 <Typography variant="h3" color="inherit">
//                     Marvel Heros
//                 </Typography>
//               </Toolbar>
//           </AppBar>
//         )
//     }
// }

function AppHeader(props) {
        return (
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h3" color="inherit">
                    {props.title}
                </Typography>
              </Toolbar>
          </AppBar>
        )
}

export default AppHeader;