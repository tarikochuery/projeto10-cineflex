import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../styles/Container";
import { Footer } from "../Footer/Footer";
import { Seat } from "../Seat/Seat";
import { StyledSeats } from "./style";

const GET_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/showtimes'
const POST_URL = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many'

const bookSeats = (body) => {
    axios.post(POST_URL, body)
}

export const Seats = ({setBookedSeatsInfo}) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [showtimeInfo, setShowtimeInfo] = useState()
    
    const [bookedSeats, setBookedSeats] = useState({name: '', cpf: '', ids: []})

    const handleChange = (key, value) => {
        setBookedSeats({...bookedSeats, [key]: value})
    }

    const addSeat = (id) => {
        setBookedSeats({...bookedSeats, ids: [...bookedSeats.ids, id]})
    }

    const removeSeat = (idRemoved) => {
        setBookedSeats({...bookedSeats, ids: bookedSeats.ids.filter(id => id !== idRemoved)})
    }

    const handleClick = () => {
        bookSeats(bookedSeats)
        setBookedSeatsInfo({bookedSeats, showtimeInfo})
        navigate('/sucesso')
    }

    useEffect(() => {
      axios.get(`${GET_URL}/${id}/seats`)
      .then(res => setShowtimeInfo(res.data))
    }, [])
    

    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <StyledSeats>
                <div className="seats-list">
                    {showtimeInfo?.seats.map(seat => <Seat seat={seat} removeSeat={removeSeat} addSeat={addSeat} key={seat.id} />)}
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
                        <input value={bookedSeats.name} onChange={(e) => handleChange('name', e.target.value)} type="text" id="name" placeholder="Digite seu nome..." />
                    </div>
                    <div className="input">
                        <label htmlFor="cpf">CPF do Comprador</label>
                        <input value={bookedSeats.cpf} onChange={(e) => handleChange('cpf', e.target.value)} type="text" id="cpf" placeholder="Digite seu CPF..." />
                    </div>
                </div>
                <button onClick={() => handleClick()}>Reservar assento(s)</button>
            </StyledSeats>
            {showtimeInfo && <Footer day={showtimeInfo.day} time={showtimeInfo.name} movieInfo={showtimeInfo.movie} />}
        </Container>
    );
};