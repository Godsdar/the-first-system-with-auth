import styled from "styled-components";

const StyledLabel = styled.label`
    margin-right: 12px;
`;

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <StyledLabel
            {...props}
            className={
                `block text-sm font-medium text-gray-700 ` +
                className
            }
        >
            {value ? value : children}
        </StyledLabel>
    );
}
