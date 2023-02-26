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

export const Home = () => {
    return (
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    )
};

export const Create = () => {
    return (
        <Container>
            <StyledText>Create</StyledText>
        </Container>
    )
};

export const Notification = () => {
    return(
        <Container>
            <StyledText>Notification</StyledText>
        </Container>
    )
};