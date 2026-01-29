import Item from '@/Components/DashboardItem';
import { GlobalStyles, colorsPallete } from '@/global-styles';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';


const data = {
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
    margin: 0 auto;
    background-color: ${colorsPallete.lightPurple};
`;

export default function Dashboard() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Normalize></Normalize>
            <Container>
                <StyledWrapper>
                    <Row style={{textAlign: 'center'}}>
                        <Col>
                            <Item title={data.Posts.title}
                                  number={data.Posts.number}
                                  description={data.Posts.description}></Item>
                        </Col>
                        <Col>
                            <Item title={data.Users.title}
                                  number={data.Users.number}
                                  description={data.Users.description}></Item>
                        </Col>
                        <Col>
                            <Item title={data.Comments.title}
                                  number={data.Comments.number}
                                  description={data.Comments.description}></Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link href="/" as="button">Back to the Welcome</Link>
                        </Col>
                    </Row>
                </StyledWrapper>
            </Container>
        </>
    );
}
