import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

export const Mail = () => {
    return (
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    )
};

export const Meet = () => {
    return (
        <Container>
            <StyledText>Create</StyledText>
        </Container>
    )
};

export const Settings = () => {
    return(
        <Container>
            <StyledText>Notification</StyledText>
        </Container>
    )
};