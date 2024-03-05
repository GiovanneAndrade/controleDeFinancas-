import styled from "styled-components";

export const CaixaMeio = () => {
    return (
        <ContainerMeio>
            <div className="descricao">
                Descrição
                <input type="text" />
            </div>

            <div className="descricao">
                Valor
                <input type="number" />
            </div>

            <div className="Entradas">
                <label>
                    Entrada:
                    <input type="radio" name="opcao" value="entrada" />
                </label>

                <label>
                    Saída:
                    <input type="radio" name="opcao" value="saida" />
                </label>
            </div>
            <div className="descricao">
                <button>Enviar</button>
            </div>
        </ContainerMeio>
    );
};

export const ContainerMeio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    background-color: #d5bdaf;
    padding: 10px;

    border-radius: 5px;
    .descricao {
        display: flex;
        flex-direction: column;
        button {
            width: 100px;
            height: 40px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }
        input {
            border: none;
            border-radius: 5px;
        }
    }
    .Entradas {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
