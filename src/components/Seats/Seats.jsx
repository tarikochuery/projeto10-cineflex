import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../styles/Container";
import { Footer } from "../Footer/Footer";
import { Seat } from "../Seat/Seat";
import { StyledSeats } from "./style";

const BASE_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/showtimes'


export const Seats = () => {
    const { id } = useParams();
    const [showtimeInfo, setShowtimeInfo] = useState()
    
    useEffect(() => {
      axios.get(`${BASE_URL}/${id}/seats`)
      .then(res => setShowtimeInfo(res.data))
    }, [])
    

    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <StyledSeats>
                <div className="seats-list">
                    {showtimeInfo?.seats.map(seat => <Seat seat={seat} key={seat.id} />)}
                </div>
                <div className="legends">
                    <div className="legend-container">
                        <div className="legend selected">

                        </div>
                        <p>Selecionado</p>
                    </div>
                    <div className="legend-container">
                        <div className="legend available">

                        </div>
                        <p>Disponível</p>
                    </div>
                    <div className="legend-container">
                        <div className="legend unavailable">

                        </div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="form">
                    <div className="input">
                        <label htmlFor="name">Nome do Comprador</label>
                        <input type="text" id="name" placeholder="Digite seu nome..." />
                    </div>
                    <div className="input">
                        <label htmlFor="cpf">CPF do Comprador</label>
                        <input type="text" id="cpf" placeholder="Digite seu CPF..." />
                    </div>
                </div>
                <button>Reservar assento(s)</button>
            </StyledSeats>
            {showtimeInfo && <Footer day={showtimeInfo.day} time={showtimeInfo.name} movieInfo={showtimeInfo.movie} />}
        </Container>
    );
};