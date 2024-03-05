import styled from "styled-components";

export const CaixaTop = () => {
    return (
        <CaixaTopContainer>
            <div className="caixaInferiorTop">
                <p>entradas</p> <p>Total</p>
            </div>
            <div className="caixaBotton">
                <p>R$ 5400.000</p>
            </div>
        </CaixaTopContainer>
    );
};

export const CaixaTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    background-color: #d5bdaf;
    padding: 10px;
    height: 70px;
    border-radius: 10px;
    .caixaInferiorTop {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50%;
    }
    .caixaBotton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        p {
            font-size: 20px;
            font-weight: bold;
        }
    }
`;
