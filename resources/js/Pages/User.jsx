import Item from '@/Components/DashboardItem';
import { GlobalStyles, colorsPallete } from '@/global-styles';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';


const data = {
    firstName: "Sudo",
    lastName: "Anon",
    "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit ducimus? Voluptates molestiae quod illum sed! Neque, incidunt repellat! Quos iste pariatur aut debitis voluptas fugit quae ut rem dolorum.",
    avatar: {
       'url': `https://placehold.co/60x60/royalblue/fef`, 
    },
    "Posts": {
        "title": "Posts",
        "number": 1,
        "description": "una"
    },
    "Users": {
        "title": "Users",
        "number": 2,
        "description": "dos"
    },
    "Comments": {
        "title": "Comments",
        "number": 3,
        "description": "tres"
    }
};

const StyledWrapper = styled.div`
    $height: 800px;
    padding: 24px;
    margin: 0 auto;
    max-width: $height;
    height: $height;
    background-color: ${colorsPallete.lightPurple};
    border-radius: 8px;

    & p {
        margin-top: 12px;
        color: 'red';
        max-width: 300px;
        text-align: justify;
    }

    & span {
        margin-left: 10px;
        font: 400 2rem system-ui;
    }

    & img {
        border-radius: 50%;
    }
`;

const StyledStats = styled.div`
    margin-top: 50%;
    text-align: center;

    & > h2 {
        font: 500 4rem Avenir;
    }
`;

export function Stats () {
    return (
        <StyledStats>
            <h2>statistics...</h2>
        </StyledStats>
    )
}

export default function User() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Normalize></Normalize>
            <Container>
                <Row style={{paddingTop: 8}}>
                    <Col xxl={4}>
                        <StyledWrapper>
                            <img src='https://placehold.co/60x60/orange/fef' alt="" />
                            <span>DAR</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aspernatur quos eius magnam suscipit iure a, animi sed? Iste veritatis aliquam id aut nulla dignissimos, at consequatur veniam atque ipsam!</p>
                            <Stats></Stats>
                        </StyledWrapper>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}
