import React from 'react';
import { CssBaseline, Container, Toolbar, Typography } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h5" component="h2">
                        Nathan Smith
                    </Typography>
                </Toolbar>
            </Container>
        </>
    );
};

export default App;
